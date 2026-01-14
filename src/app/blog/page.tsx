export default function BlogPage() {
  return (
    <main className="pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      <p className="text-gray-600 mb-10">
        Actionable insights on digital marketing, SEO, growth, and conversions.
      </p>

      <div className="space-y-6">
        <article className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">
            How to Grow Your Traffic in 2025
          </h2>
          <p className="text-gray-500">
            Learn proven strategies to scale organic traffic sustainably.
          </p>
        </article>

        <article className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">
            SEO vs Paid Ads: What Works Best?
          </h2>
          <p className="text-gray-500">
            A deep dive into ROI, timelines, and growth strategies.
          </p>
        </article>
      </div>
    </main>
  );
}
