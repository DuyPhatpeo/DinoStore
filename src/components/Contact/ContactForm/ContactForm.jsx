export default function ContactForm() {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-2xl shadow-md p-6 md:p-8 flex flex-col justify-between">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
        <p className="text-sm text-gray-600">
          If you’ve got great products and would like to work with us, drop us a
          line.
        </p>
      </div>

      <form className="mt-6 space-y-5 flex flex-col flex-grow justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 px-4 py-3 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 px-4 py-3 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <textarea
          placeholder="Your Message"
          className="border border-gray-300 px-4 py-3 rounded-lg w-full text-sm min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>

        <div className="pt-2">
          <button
            type="submit"
            className="bg-black text-white text-sm px-6 py-3 rounded-lg hover:opacity-90 transition w-full md:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
