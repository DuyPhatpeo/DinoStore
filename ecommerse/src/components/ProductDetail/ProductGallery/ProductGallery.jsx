export default function ProductGallery({ images = [] }) {
  return (
    <div className="space-y-2">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Product ${idx}`}
          className="w-full rounded border"
        />
      ))}
    </div>
  );
}
