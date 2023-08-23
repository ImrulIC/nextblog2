export default async function getAllPosts() {
  console.log("Fetching posts...");

  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-list/1", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching posts");
  }

  return res.json();
}
