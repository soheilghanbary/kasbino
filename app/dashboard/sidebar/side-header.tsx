import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "~/pages/api/auth/[...nextauth]";
import styles from "./sidebar.module.scss";

export default async function SidebarHeader() {
  const session = await getServerSession(authOptions);
  return (
    <div className={styles.header}>
      <Image
        width={40}
        height={40}
        className="rounded-full p-0.5 border border-line"
        alt={session?.user?.name as string}
        src={session?.user?.image as string}
      />
      <h2>{session?.user?.name}</h2>
    </div>
  );
}
