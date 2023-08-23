import getAllPosts from "../lib/getAllPosts.js";
import Link from "next/link.js";

async function page() {
  const posts = await getAllPosts();
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section>
          <h1 className="font-bold text-lg">All Blog Posts</h1>

          <div className="mt-5">
            {posts.map((post) => {
              const { id, title, image, created_at } = post;
              return (
                <p className="pb-5" key={id}>
                  <Link href={`/blog/${id}`}>
                    {id} - {title}
                  </Link>
                </p>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
