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
    <div className="flex flex-col gap-3 py-4 border-b">
      {/* Dòng 1: Sort dropdown */}
      <div className="flex items-center gap-2">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2 border rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Dòng 2: Layout toggle + Show per page */}
      <div className="flex items-center justify-between">
        {/* Layout toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleLayoutChange("grid")}
            className={`p-2 border rounded transition-colors duration-200 ${
              layout === "grid"
                ? "text-black border-black bg-gray-100"
                : "text-gray-400 border-gray-300 hover:text-black hover:border-black"
            }`}
            aria-label="Grid View"
          >
            <FiGrid size={16} />
          </button>
          <button
            onClick={() => handleLayoutChange("list")}
            className={`p-2 border rounded transition-colors duration-200 ${
              layout === "list"
                ? "text-black border-black bg-gray-100"
                : "text-gray-400 border-gray-300 hover:text-black hover:border-black"
            }`}
            aria-label="List View"
          >
            <FiList size={16} />
          </button>
        </div>

        {/* Show per page */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span>Show</span>
          <select
            value={limit}
            onChange={(e) =>
              setLimit(
                e.target.value === "all" ? "all" : Number(e.target.value)
              )
            }
            className="px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {SHOW_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
