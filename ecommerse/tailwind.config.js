/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // tuỳ chỉnh theo dự án
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111", // màu đen nhạt cho text và tiêu đề
        secondary: "#f5f5f5", // màu nền xám nhạt
        accent: "#999999", // màu chữ phụ
        neutral: "#e0e0e0", // viền, gạch phân cách
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Arial", "sans-serif"],
        mono: ['"Courier New"', "monospace"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
