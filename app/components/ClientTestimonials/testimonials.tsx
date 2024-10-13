export default function Testimonials() {
    return (
      <section className="bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">What Clients Say!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"BrandBuzz transformed my business!"</p>
              <div className="flex justify-center items-center space-x-2">
                <img src='https://i.pinimg.com/236x/3c/93/0a/3c930a5b0b7a35c0415d896aaf4047ed.jpg' alt="Client 1" className="w-12 h-12 rounded-full" />
                <p>Jessica Brown</p>
                <span>★★★★★</span>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Highly recommend their services."</p>
              <div className="flex justify-center items-center space-x-2">
                <img src='https://i.pinimg.com/236x/49/af/14/49af147a467ace4768394811d8ad1649.jpg' alt="Client 2" className="w-12 h-12 rounded-full" />
                <p>Hadley John</p>
                <span>★★★★★</span>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"A great team to work with."</p>
              <div className="flex justify-center items-center space-x-2">
                <img src='https://i.pinimg.com/236x/e7/27/b3/e727b38bc4a2340d4b772edd0864e5c1.jpg' alt="Client 3" className="w-12 h-12 rounded-full" />
                <p>Tim Spark</p>
                <span>★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  