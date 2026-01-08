# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# DinoStore

DinoStore là một website thương mại điện tử hiện đại, xây dựng với React và Vite, cung cấp trải nghiệm mua sắm trực tuyến cho các sản phẩm đa dạng.

## Tính năng chính

- Trang chủ với banner, danh sách sản phẩm nổi bật, bộ đếm khuyến mãi
- Trang sản phẩm chi tiết với thư viện ảnh, thông tin, sản phẩm liên quan
- Chức năng giỏ hàng, so sánh, wishlist
- Đăng nhập, đăng ký, xác thực người dùng
- Bộ lọc, phân trang, tìm kiếm sản phẩm
- Trang giới thiệu, liên hệ, bản đồ, FAQ
- Responsive UI, tối ưu cho thiết bị di động

## Cấu trúc thư mục

- `src/components/` - Các component giao diện chia theo chức năng
- `src/pages/` - Các trang chính: Home, Shop, ProductDetail, AboutUs, Contact, NotFound
- `src/apis/` - Giao tiếp API: auth, sản phẩm
- `src/contexts/` - Context Provider cho Sidebar, Toast
- `src/hooks/` - Custom hooks: useHeaderBehavior, useProductList, useToast...
- `src/assets/` - Ảnh, CSS

## Cài đặt & chạy dự án

```bash
npm install
npm run dev
```

Truy cập: http://localhost:5173

## Công nghệ sử dụng

- React
- Vite
- Axios
- React Router DOM
- Context API

## Đóng góp

Pull request và issue luôn được chào đón!

## License

MIT
