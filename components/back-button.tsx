'use client'
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      className="fixed md:left-10 top-10 pl-2"
      variant={"ghost"}
    >
      <ChevronLeft className="mr-2 h-5 w-5" />
      Back
    </Button>
  );
}
