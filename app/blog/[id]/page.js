import getBlogPost from "@/lib/getBlogPost";

export default async function SingleBlog({ params }) {
  const id = params.id;
  const post = await getBlogPost(id);

  return (
    <div>
      <section>
        <h1 className="font-bold text-lg">{post.title}</h1>

        <div className="mt-5">{post.content}</div>
      </section>
    </div>
  );
}
