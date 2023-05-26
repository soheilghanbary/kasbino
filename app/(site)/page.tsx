import Link from "next/link";
import { Button, buttonVariants } from "~/components/ui/button";
import { site } from "~/config/site";
import { cn } from "~/lib/utils";

export default function homePage() {
  return (
    <section className="home-section">
      <div>
        <h1 className="title">{site.title}</h1>
        <p className="description">{site.description}</p>
        <div className="space-x-4">
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            Get Started
          </Link>
          <Link
            href={"https://github.com/soheilghanbary"}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
