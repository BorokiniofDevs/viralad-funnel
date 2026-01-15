import Navbar from "../components/Navbar";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      {/* ORANGE HERO SECTION */}
      <section className="bg-[#f2672f] px-6 pb-24 pt-28 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            How can I help?
          </h1>

          <p className="mt-6 text-sm opacity-90 md:text-base">
            Do you have a question or are you interested in working with my team
            and me?
            <br />
            Just fill out the form fields below.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <ContactForm />
        </div>
      </section>

      {/* SOCIAL CONNECT */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-2xl font-light">Or connect with me on...</h2>

        <div className="mx-auto mt-4 h-[2px] w-10 bg-[#f2672f]" />

        <div className="mt-10 flex justify-center gap-10 text-xl text-gray-700">
          <span>🐦</span>
          <span>📘</span>
          <span>▶️</span>
          <span>🔗</span>
          <span>📸</span>
        </div>
      </section>
    </>
  );
}
