

export default function About() {
  return (
    
    <main className="p-4">
     

    <section className="company-history py-20 text-center">
      <h2 className="text-3xl font-bold">Our History</h2>
      <p className="mt-4 text-lg">Since our inception, we have grown tremendously and made significant impacts in our industry.</p>
    </section>
    <section className="mission-vision py-20 text-center bg-gray-100">
      <h2 className="text-3xl font-bold">Mission & Vision</h2>
      <p className="mt-4 text-lg">Our mission is to deliver outstanding services. Our vision is to be the market leader.</p>
    </section>
    <section className="team py-20 text-center">
      <h2 className="text-3xl font-bold">Meet Our Team</h2>
      <div className="flex justify-center mt-6 space-x-4">
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-2xl font-bold">John Doe</h3>
          <p className="mt-2">CEO</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-2xl font-bold">Jane Smith</h3>
          <p className="mt-2">CTO</p>
        </div>
      </div>
    </section>
  </main>
  );
}



