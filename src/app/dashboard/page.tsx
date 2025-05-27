import { prisma } from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const userData = await getUser();
  async function getData() {
    const data = await prisma.blogPost.findMany({
      where: {
        authorId: userData?.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return data;
  }

  const blogData = await getData();
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Blog articles</h2>
        <Link
          className="border-2 p-2 rounded-2xl border-amber-400 bg-amber-100 hover:bg-amber-300 transition-all"
          href="/dashboard/create"
        >
          Create post
        </Link>
      </div>
      <div className="grid gap-5 grid-cols-3">
        {blogData.map((article) => (
          <Link key={article.id} href={`/post/${article.id}`}>
            <Card className="">
              <CardHeader>
                <CardTitle>
                  <h2 className="font-medium text-xl">{article.title}</h2>
                </CardTitle>
                <CardDescription>
                  <p>{article.content}</p>
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
