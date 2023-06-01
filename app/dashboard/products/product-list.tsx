import { getServerSession } from "next-auth";
import { authOptions } from "~/pages/api/auth/[...nextauth]";
import ProductItem from "./product-item";
import styles from './products.module.scss'
import { getProducts } from "~/actions/dashboard";

export default async function ProductList() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id as string;
  const products = await getProducts(userId);
  return (
    <div className={styles['product-list']}>
      {products?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
}
