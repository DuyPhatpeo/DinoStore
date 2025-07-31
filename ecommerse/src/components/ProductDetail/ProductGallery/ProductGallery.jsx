export default function ProductGallery({ images = [] }) {
  if (!images.length) return null;

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden rounded bg-gray-100 aspect-[4/5] group"
        >
          <img
            src={src}
            alt={`Ảnh ${idx + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
