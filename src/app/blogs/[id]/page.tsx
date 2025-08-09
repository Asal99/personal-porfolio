import dbConnect from "../../../utils/dbConnect";
import BlogModel from "../../models/Blog";
import { notFound } from "next/navigation";

export const runtime = "nodejs";
interface PageProps {
  params: { id: string };
}

type BlogType = {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  createdAt: Date | string;
};

export default async function BlogDetailPage({ params }: PageProps) {
  await dbConnect();

  const blog = (await BlogModel.findById(params.id)
    .select("title slug content createdAt")
    .lean()) as BlogType | null;

  if (!blog) return notFound();

  const created =
    blog.createdAt instanceof Date
      ? blog.createdAt.toDateString()
      : new Date(blog.createdAt).toDateString();

  return (
    <main
      style={{ padding: "60px", backgroundColor: "#0b0f19", color: "#fff" }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#ffcb05" }}>{blog.title}</h1>
      <p style={{ marginTop: "10px", color: "#bbb" }}>{created}</p>
      <p style={{ lineHeight: "1.7", fontSize: "1.1rem" }}>{blog.content}</p>
    </main>
  );
}
