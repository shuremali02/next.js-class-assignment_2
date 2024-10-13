import Link from "next/link";
export default function CTA() {

    return (
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Ready to get started?</h2>
          <Link href="mailto:shuremsyed41@gmail.com" className="bg-orange-600 text-white px-6 py-3 rounded-lg">
            Contact Us
          </Link>
        </div>
      </section>
    );
  }
  