// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Left from "@images/Image_1.webp";
import Right from "@images/Image_2.webp";

export default function HeroBanner() {
  return (
    <section className="w-full py-10 overflow-hidden bg-white sm:py-14">
      <div className="container flex flex-col items-center justify-between gap-6 px-4 mx-auto overflow-hidden md:flex-row">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={Left}
            alt="Left model"
            className="object-cover w-full h-auto rounded"
          />
        </motion.div>

        {/* Center Text */}
        <div className="w-full px-2 space-y-4 text-center md:w-1/3 md:px-4">
          <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
            Sale Of The Year
          </h2>
          <p className="text-sm text-gray-600 sm:text-base">
            Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
          </p>
          <button className="px-6 py-2 text-sm font-medium transition border border-black hover:bg-black hover:text-white">
            Read more
          </button>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
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
