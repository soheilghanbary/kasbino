
import { Separator } from "~/components/ui/separator";
import AuthProvider from "~/components/auth-provider";
import CreateProductButton from "./create-button";
import { Suspense } from "react";
import ProductSkeletons from "./product-skeletons";
import styles from "./products.module.scss";
import ProductList from "./product-list";

export default function ProductsPage() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Suspense fallback={<ProductSkeletons />}>
          {/* @ts-expect-error Server Component */}
          <ProductList />
        </Suspense>
      </div>
    </AuthProvider>
  );
}

function Header() {
  const headerStyles = {
    header: styles.header,
    separator: "my-3"
  };
  return (
    <>
      <div className={headerStyles.header}>
        <h2>Products Page</h2>
        <CreateProductButton />
      </div>
      <Separator className={headerStyles.separator} />
    </>
  );
}
