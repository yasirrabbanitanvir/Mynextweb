import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl w-full">
        <section className="services-overview text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the variety of services we offer to help you achieve your goals.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-gray-800">Service 1</h3>
              <p className="mt-4 text-gray-600">Detailed description of Service 1.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-gray-800">Service 2</h3>
              <p className="mt-4 text-gray-600">Detailed description of Service 2.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-gray-800">Service 3</h3>
              <p className="mt-4 text-gray-600">Detailed description of Service 3.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
