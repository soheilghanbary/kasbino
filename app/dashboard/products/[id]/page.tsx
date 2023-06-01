import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import TabDetails from "./tab-details";
import TabUpload from "./tab-upload";
import TabSetting from "./tab-setting";
import { getProduct } from "~/actions/dashboard";

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  const details = {
    name: product?.name as string,
    price: product?.price as string,
    description: product?.description as string,
  };
  return (
    <Tabs defaultValue="info" className="max-w-md mx-auto w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="info">Details</TabsTrigger>
        <TabsTrigger value="upload">Upload</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="info">
        <TabDetails {...details} />
      </TabsContent>
      <TabsContent value="upload">
        <TabUpload initialPath={product?.image || ''} />
      </TabsContent>
      <TabsContent value="settings">
        <TabSetting />
      </TabsContent>
    </Tabs>
  );
}
