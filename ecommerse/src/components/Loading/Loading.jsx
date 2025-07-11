export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#eae6e3]/60 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-[#c2b8b1] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
