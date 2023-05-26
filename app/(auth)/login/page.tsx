import { School } from "lucide-react";
import BackButton from "~/components/back-button";
import AuthForm from "./auth-form";
import styles from "./auth.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "~/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  session?.user && redirect("/dashboard")
  return (
    <div className={styles.container}>
      <BackButton />
      <div className={styles.main}>
        <School />
        <h1>Welcome back</h1>
        <p>Enter your email to sign in to your account</p>
        <AuthForm />
      </div>
    </div>
  );
}
