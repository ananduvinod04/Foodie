// src/pages/About.jsx
export default function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 rounded-xl shadow-md">
      {/* About Section */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-3">About Us</h1>
        <p className="text-sm leading-relaxed">
          Welcome to our platform! We are dedicated to providing the best
          service and experience to our customers. Our mission is to deliver
          high-quality solutions with a focus on customer satisfaction and
          innovation.
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
        <p className="text-sm leading-relaxed mb-4">
          Have questions or feedback? We’d love to hear from you!
        </p>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-3 py-2 rounded-md text-sm 
                       bg-gray-50 dark:bg-gray-800 
                       border-gray-300 dark:border-gray-600 
                       text-gray-900 dark:text-gray-100 
                       focus:ring-2 focus:ring-orange-500 outline-none transition-colors duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-3 py-2 rounded-md text-sm 
                       bg-gray-50 dark:bg-gray-800 
                       border-gray-300 dark:border-gray-600 
                       text-gray-900 dark:text-gray-100 
                       focus:ring-2 focus:ring-orange-500 outline-none transition-colors duration-300"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border px-3 py-2 rounded-md text-sm 
                       bg-gray-50 dark:bg-gray-800 
                       border-gray-300 dark:border-gray-600 
                       text-gray-900 dark:text-gray-100 
                       focus:ring-2 focus:ring-orange-500 outline-none transition-colors duration-300"
          />
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
