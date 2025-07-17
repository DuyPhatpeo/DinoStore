export default function Map() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
      {/* Overlay Label */}
      <div className="absolute z-10 top-4 left-4 bg-black bg-opacity-70 text-white text-sm px-4 py-2 rounded-full shadow-md">
        🗺️ Our Location
      </div>

      {/* Google Map */}
      <iframe
        title="Google Map"
        className="w-full h-full grayscale-[30%] contrast-125 brightness-95 border-none"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4111497402765!2d109.19501271151908!3d12.281817287987334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317067fb03210223%3A0x361bc094a9b031e1!2zMTggVHLhuqduIE1haSBOaW5oLCBWxKluaCBIxrDhu51pLCBOaGEgVHJhbmcsIEtow6FuaCBIw7JhIDY1MDAwMA!5e0!3m2!1sen!2s!4v1721180277266!5m2!1sen!2s"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
