export default function CareersSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold">
            Outstanding results require outstanding people.
          </h2>
          <p className="mt-4 text-gray-600">
            If you love data, growth, and performance marketing — you’ll fit
            right in.
          </p>
        </div>

        <div className="rounded-lg border p-8 shadow-sm">
          <h3 className="font-semibold">Join Viral Ad Media</h3>
          <p className="mt-2 text-sm text-gray-500">
            100% remote. Performance-driven. Growth-focused.
          </p>
          <button className="mt-4 text-orange-500 font-medium">
            Check open roles →
          </button>
        </div>
      </div>
    </section>
  );
}
