import { FiGrid, FiList } from "react-icons/fi";

const SORT_OPTIONS = [
  { value: "default", label: "Default sorting" },
  { value: "popularity", label: "Sort by popularity" },
  { value: "rating", label: "Sort by average rating" },
  { value: "latest", label: "Sort by latest" },
  { value: "price_asc", label: "Sort by price: low to high" },
  { value: "price_desc", label: "Sort by price: high to low" },
];

const SHOW_OPTIONS = [
  { value: 8, label: "8" },
  { value: 12, label: "12" },
  { value: "all", label: "All" },
];

export default function Filter({
  sort,
  setSort,
  limit,
  setLimit,
  layout,
  setLayout,
}) {
  const handleLayoutChange = (type) => setLayout(type);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b">
      {/* Left: Sort + Layout Toggle */}
      <div className="flex items-center gap-4">
        {/* Sort Dropdown */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-1 border rounded text-sm text-gray-700"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Layout Toggle Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleLayoutChange("grid")}
            className={`p-2 border rounded ${
              layout === "grid" ? "text-black border-black" : "text-gray-400"
            }`}
            aria-label="Grid View"
          >
            <FiGrid size={16} />
          </button>
          <button
            onClick={() => handleLayoutChange("list")}
            className={`p-2 border rounded ${
              layout === "list" ? "text-black border-black" : "text-gray-400"
            }`}
            aria-label="List View"
          >
            <FiList size={16} />
          </button>
        </div>
      </div>

      {/* Right: Show Per Page */}
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <span>Show</span>
        <select
          value={limit}
          onChange={(e) =>
            setLimit(e.target.value === "all" ? "all" : Number(e.target.value))
          }
          className="px-2 py-1 border rounded text-sm"
        >
          {SHOW_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
