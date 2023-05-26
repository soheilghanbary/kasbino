import SignOut from "./sign-out";
import { ReactNode } from "react";
import { prisma } from "~/lib/db";
import SocialForm from "./social-form";
import styles from "./settings.module.scss";
import { getServerSession } from "next-auth";
import UpdateInfoForm from "./update-info-form";
import AuthProvider from "~/components/auth-provider";
import { authOptions } from "~/pages/api/auth/[...nextauth]";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  const user = await prisma?.user.findFirst({
    where: { id: session?.user?.id },
  });

  const socials = {
    twitter: user?.twitter as string,
    instagram: user?.instagram as string,
    website: user?.website as string,
    linkedin: user?.linkedin as string,
  };

  return (
    <AuthProvider>
      <h1 className={styles.title}>Settings</h1>
      <Card title="Change your Information">
        <UpdateInfoForm bio={user?.bio as string} name={user?.name as string} />
      </Card>
      <Card title="Social Media">
        <SocialForm {...socials} />
      </Card>
      <Card title="Sign Out">
        <SignOut />
      </Card>
    </AuthProvider>
  );
}

const Card = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <h2>{title}</h2>
    </div>
    {children}
  </div>
);
