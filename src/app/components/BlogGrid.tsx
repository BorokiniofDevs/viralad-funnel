import BlogCard from "./BlogCard";

const posts = [
  {
    title: "Google Algorithm Updates Explained",
    image: "/blog-1.jpg",
    category: "SEO",
  },
  {
    title: "How AI Is Changing Digital Marketing",
    image: "/blog-2.jpg",
    category: "Marketing",
  },
  {
    title: "Content Strategy That Actually Converts",
    image: "/blog-3.jpg",
    category: "Content",
  },
  {
    title: "Paid Ads: What Still Works in 2026",
    image: "/blog-4.jpg",
    category: "Ads",
  },
  {
    title: "The Psychology Behind High CTR",
    image: "/blog-5.jpg",
    category: "Growth",
  },
  {
    title: "SEO Case Study: From 0 to 1M",
    image: "/blog-6.jpg",
    category: "Case Study",
  },
];

export default function BlogGrid() {
  return (
    <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <BlogCard key={i} {...post} />
      ))}
    </section>
  );
}
