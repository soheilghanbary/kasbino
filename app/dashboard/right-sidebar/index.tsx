import { UserPlus2 } from "lucide-react";
import Image from "next/image";
import { prisma } from "~/lib/db";

export default async function RightSidebar() {
  const users = await prisma.user.findMany();
  return (
    <div className="flex flex-col gap-2 sticky top-5 pr-6 w-80">
      <div className="rounded border">
        <div className="rounded-t p-4 bg-background-secondary border-b">
          <h2 className="text-sm text-foreground-secondary font-medium flex items-center">
            <UserPlus2 className="w-5 h-5 mr-3" />
            New Users Join
          </h2>
        </div>
        {users?.map((user) => (
          <div
            key={user.id}
            className={
              "flex items-center cursor-pointer space-x-4 rounded-lg p-2"
            }
          >
            <Image
              width={40}
              height={40}
              className="rounded-full p-0.5 border border-line"
              alt={user.name as string}
              src={user.image as string}
            />
            <h2 className="text-sm font-medium text-foreground-secondary">
              {user.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
