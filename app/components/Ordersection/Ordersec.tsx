export default function Steps() {
    return (
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Simple <span className="text-orange-600">
            Solutions
          </span> </h2>
          <p className="text-lg text-gray-600 mb-8">
            We understand that no two businesses are alike. That&#39;s why we take the time to understand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-left">
              <h3 className="font-semibold text-xl mb-2">1. Contact Us</h3>
              <p>Reach out to discuss your needs.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-xl mb-2">2. Consult</h3>
              <p>We&#39;ll help you plan your strategy.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-xl mb-2">3. Place Order</h3>
              <p>Confirm the order and details.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-xl mb-2">4. Payment</h3>
              <p>Secure payment for services.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  