"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import Dropzone from "react-dropzone";
import { cn } from "~/lib/utils";
import { updateProductImage } from "../../actions";
import { toast } from "react-hot-toast";
import { uploadFile } from "@uploadcare/upload-client";

export default function TabUpload({ initialPath }: { initialPath: string }) {
  const [path, setPath] = useState(initialPath);
  const params = useParams() as { id: string };
  const productId = params.id;
  const router = useRouter();
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    toast("Uploading...!", {
      style: {
        backgroundColor: "var(--background-secondary)",
        fontSize: 14,
        color: "#ffffff",
      },
    });
    const result = await uploadFile(acceptedFiles[0], {
      publicKey: "b0e64960d0d6eda68ce8",
      store: "auto",
      metadata: {
        subsystem: "js-client",
        pet: "cat",
      },
    });
    const newImageURL = `https://ucarecdn.com/${result.uuid}/`;
    await updateProductImage(newImageURL, productId);
    setPath(newImageURL);
    toast.success("Image Uploaded Successfully!", {
      style: {
        backgroundColor: "var(--blue-primary)",
        fontSize: 14,
        color: "#ffffff",
      },
    });
    router.refresh();
  }, []);

  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section
          {...getRootProps()}
          className={cn(
            "w-full h-[360px] border-2 border-dashed rounded-md flex justify-center items-center duration-200 p-1",
            isDragActive && "border-blue-primary"
          )}
        >
          {path ? (
            <PreviewImage path={path} />
          ) : (
            <>
              <input {...getInputProps()} />
              <p>Upload your Product Image</p>
            </>
          )}
        </section>
      )}
    </Dropzone>
  );
}

function PreviewImage({ path }: { path: string }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        alt="Current Image"
        // layout={"fill"}
        // objectFit="cover"
        src={path}
        className="rounded-md"
      />
    </div>
  );
}