import { createContext, useState, useCallback } from "react";

// Tạo context
export const SideBarContext = createContext();

// Provider bọc toàn bộ ứng dụng
export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null); // Chứa component hiển thị trong Sidebar

  // Hàm mở Sidebar với nội dung cụ thể
  const openSidebar = useCallback((newContent) => {
    setContent(newContent);
    setIsOpen(true);
  }, []);

  // Hàm đóng Sidebar
  const closeSidebar = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, []);

  return (
    <SideBarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        content,
        setContent,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
