export default function SectionTitle() {
  return (
    <div className="text-center my-10">
      <p className="text-xs text-gray-500 tracking-widest uppercase mb-2">
        We try our best for you
      </p>
      <div className="flex items-center justify-center gap-4">
        <hr className="flex-grow border-gray-300 border-t" />
        <h2 className="text-2xl tracking-wide font-medium">
          Welcome to the Dino Store
        </h2>
        <hr className="flex-grow border-gray-300 border-t" />
      </div>
    </div>
  );
}
