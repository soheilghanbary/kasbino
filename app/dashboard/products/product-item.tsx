import { Button } from "~/components/ui/button";
import Link from "next/link";
import type { Product } from "@prisma/client";
import styles from "./products.module.scss";
import dayjs from "dayjs";
import revalidatetime from "dayjs/plugin/relativeTime";
import { useMemo } from 'react'

dayjs.extend(revalidatetime);

interface ProductImageProps {
  image: string | null;
}

interface ProductDetailsProps {
  name: string | null;
  price: string | null;
}

export default function ProductItem(product: Product) {
  const { id, name, price, image, published } = product;

  return (
    <Link href={`/dashboard/products/${id}`} className={styles["product-card"]}>
      <ProductImage image={image} />
      <ProductDetails name={name} price={price} />
      <ProductTime published={published} />
    </Link>
  );
}

function ProductImage({ image }: ProductImageProps) {
  return (
    <>
      {image ? (
        <img src={image} alt="Product Image" />
      ) : (
        <div className={styles["image-skeleton"]} />
      )}
    </>
  );
}

function ProductDetails({ name, price }: ProductDetailsProps) {
  return (
    <div className={styles["product-details"]}>
      <h2>{name}</h2>
      <p>
        <span>$</span>
        {price}
      </p>
      <ProductActions />
    </div>
  );
}

function ProductActions() {
  return (
    <div className={styles.actions}>
      <Button variant="outline" size="sm">
        Views 0
      </Button>
      <Button variant="outline" size="sm">
        Likes 0
      </Button>
    </div>
  );
}

function ProductTime({ published }: { published: Date }) {
  const day = useMemo(() => dayjs(published), [published]);
  return <div className="absolute bottom-3 right-3 text-sm">{day.fromNow()}</div>;
}
