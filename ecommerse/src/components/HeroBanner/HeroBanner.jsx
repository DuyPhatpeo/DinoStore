import { motion } from "framer-motion";
import Left from "@images/Image_1.webp";
import Right from "@images/Image_2.webp";

export default function HeroBanner() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container flex flex-col items-center justify-between gap-6 px-4 mx-auto md:flex-row">
        {/* Left Image with animation */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={Left}
            alt="Left model"
            className="object-cover w-full h-auto rounded"
          />
        </motion.div>

        {/* Center Text */}
        <div className="w-full text-center md:w-1/3">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Sale Of The Year
          </h2>
          <p className="mb-6 text-gray-600">
            Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
          </p>
          <button className="px-6 py-2 text-sm transition border border-black hover:bg-black hover:text-white">
            Read more
          </button>
        </div>

        {/* Right Image with animation */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={Right}
            alt="Right model"
            className="object-cover w-full h-auto rounded"
          />
        </motion.div>
      </div>
    </section>
  );
}
