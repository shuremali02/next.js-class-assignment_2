export default function Services() {
    return (
      <section className="bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            We Provide The Best Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/seo.png" alt="SEO" className="w-16 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">SEO/SEM</h3>
              <p className="text-gray-600">Boost your website's visibility.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/marketing.png" alt="Marketing" className="w-16 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Marketing</h3>
              <p className="text-gray-600">Reach your target audience.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/viral.png" alt="Viral Campaign" className="w-16 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Viral Campaign</h3>
              <p className="text-gray-600">Create engaging viral campaigns.</p>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/other.png" alt="Others" className="w-16 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Others</h3>
              <p className="text-gray-600">Custom services for your needs.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  