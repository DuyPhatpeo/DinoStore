import { useContext } from "react";
import { SideBarContext } from "@contexts/SideBarProvider";
import { FiX } from "react-icons/fi";

export default function SideBar() {
  const { isOpen, setIsOpen, content } = useContext(SideBarContext);
  const sidebarWidth = 400; // bạn có thể điều chỉnh ở đây nếu muốn

  return (
    <>
      {/* Backdrop mờ đen phía sau */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar trượt phải */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-xl z-[100] w-[${sidebarWidth}px] max-w-full transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: `${sidebarWidth}px` }}
      >
        {/* Nội dung bên trong */}
        <div className="p-6 overflow-y-auto h-full custom-scrollbar">
          {content}
        </div>
      </div>

      {/* Nút đóng nằm bên ngoài bên trái */}
      {isOpen && (
        <button
          className="fixed z-[101] top-4"
          style={{ right: `${sidebarWidth + 12}px` }} // khoảng cách nhỏ giữa nút và Sidebar
          onClick={() => setIsOpen(false)}
        >
          <div className="bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-100 transition">
            <FiX className="text-xl text-gray-700" />
          </div>
        </button>
      )}
    </>
  );
}
