import { prisma } from "@/utils/db";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

type Params = Promise<{
  postId: string;
}>;

export default async function PostPage({ params }: { params: Params }) {
  const { postId } = await params;
  const postData = await getData(postId);
  return (
    <div>
      <h1>Post page</h1>
      <div>
        <h2>{postData.title}</h2>
        <h2>{postData.content}</h2>
      </div>
    </div>
  );
}
