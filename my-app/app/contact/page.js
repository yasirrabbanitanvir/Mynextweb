import React from 'react'

export default function Contact() {
  return (
      <div><main className="p-4">
      <section className="contact-form py-20 text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <form className="mt-6">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="p-2 w-full rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="p-2 w-full rounded" />
          </div>
          <div className="mb-4">
            <input type="text" placeholder="Subject" className="p-2 w-full rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="p-2 w-full rounded" rows="4"></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </section>
      <section className="contact-info py-20 text-center bg-gray-100">
        <h2 className="text-3xl font-bold">Our Contact Information</h2>
        <p className="mt-4 text-lg">123 Main St, Anytown, USA</p>
        <p className="mt-2">(123) 456-7890</p>
        <p className="mt-2">email@example.com</p>
      </section>
    </main>
          


    </div>
  )
}
