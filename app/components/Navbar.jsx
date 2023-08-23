import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className=" text-3xl font-bold italic">
            <Link href="/">NewsFlash.Com</Link>
          </h1>
        </div>
        <div className="flex items-center justify-between space-x-8 text-base">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/blog">Blog</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
