export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-700 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-xl mb-8">Discover our amazing services and solutions.</p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Example service card */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Service Title</h3>
                <p className="text-lg mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim
                  veniam.
                </p>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gradient-to-b from-purple-600 to-purple-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              {/* Example testimonial */}
              <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
                <p className="text-lg mb-4">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim
                  veniam.&quot;
                </p>
                <p className="text-base font-semibold">John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Example featured content */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Blog Post Title</h3>
                <p className="text-lg mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim
                  veniam.
                </p>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gradient-to-b from-purple-700 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white mb-8">
            Contact us today to discuss your project or request a free consultation.
          </p>
          <button className="bg-white hover:bg-gray-100 text-purple-700 font-semibold py-3 px-6 rounded">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
