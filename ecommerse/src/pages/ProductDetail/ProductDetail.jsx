import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import Footer from "@components/Footer/Footer";
import Breadcrumb from "@components/common/Breadcrumb/Breadcrumb";
import ProductGallery from "@components/ProductDetail/ProductGallery/ProductGallery";
import ProductInfo from "@components/ProductDetail/ProductInfo/ProductInfo";
import { getProductById } from "@/apis/productService";
import RelatedProducts from "@components/ProductDetail/RelatedProducts/RelatedProducts";

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;
    const fetchData = async () => {
      try {
        const res = await getProductById(productId);
        setProduct(res);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [productId]);

  if (loading) return <div className="p-10 text-center">Đang tải...</div>;
  if (!product)
    return (
      <div className="p-10 text-center text-red-500">
        Không tìm thấy sản phẩm
      </div>
    );

  return (
    <>
      <Header />
      <MainLayout>
        <Breadcrumb items={["Home", product?.name]} />

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductGallery images={product.images} />
            <ProductInfo product={product} />
          </div>

          {/* Danh sách sản phẩm liên quan */}
          <div className="mt-16">
            <RelatedProducts productId={product._id} />
          </div>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
