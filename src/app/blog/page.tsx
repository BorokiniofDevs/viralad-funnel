import BlogGrid from "../components/BlogGrid";
import Navbar from "../components/Navbar";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f5] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <BlogGrid />
        </div>
      </main>
    </>
  );
}
