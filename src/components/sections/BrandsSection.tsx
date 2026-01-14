export default function BrandsSection() {
  const brands = [
    "HP",
    "ESPN",
    "Adobe",
    "CNN",
    "LinkedIn",
    "PwC",
    "Intuit",
    "Western Union",
  ];

  return (
    <section className="bg-neutral-900 py-20 px-6 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-semibold">Working With Renowned Brands</h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-400">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center text-lg font-medium"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
