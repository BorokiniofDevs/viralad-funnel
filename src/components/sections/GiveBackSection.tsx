export default function GiveBackSection() {
  return (
    <section className="bg-orange-500 text-white py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center">
          We Believe in Giving Back
        </h2>

        <p className="mt-4 text-center max-w-2xl mx-auto text-orange-100">
          Our greatest satisfaction comes from seeing businesses succeed.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {[
            "Marketing Blog",
            "SEO Insights Tool",
            "Google Ads Grader",
            "Keyword Research Platform",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg bg-white/10 p-6 hover:bg-white/20 transition"
            >
              <h3 className="font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-orange-100">
                Free resources to help grow your business.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
