// File: Shop.jsx
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import MainLayout from "@components/Layout/Layout";
import HeroBanner from "@components/Shop/HeroBanner/HeroBanner";
import Breadcrumb from "@components/common/Breadcrumb/Breadcrumb";
import ListProduct from "@components/Shop/ListProduct/ListProduct";
import Filter from "@components/Shop/Filter/Filter";
import Pagination from "@components/Shop/Pagination/Pagination";
import useProductList from "@hooks/useProductList";

function Shop() {
  const {
    listProducts,
    sort,
    setSort,
    limit,
    setLimit,
    layout,
    setLayout,
    page,
    totalPage,
    loading,
    handlePageChange,
  } = useProductList();

  return (
    <>
      <Header />
      <MainLayout>
        <Breadcrumb items={["Home", "Shop"]} />
        <HeroBanner />
        <Filter
          sort={sort}
          setSort={setSort}
          limit={limit}
          setLimit={setLimit}
          layout={layout}
          setLayout={setLayout}
        />

        <ListProduct data={listProducts} layout={layout} />

        {loading && (
          <div className="text-center text-sm text-gray-500">Loading...</div>
        )}

        {!loading && totalPage > 1 && (
          <Pagination
            page={page}
            totalPage={totalPage}
            onPageChange={handlePageChange}
          />
        )}
      </MainLayout>
      <Footer />
    </>
  );
}

export default Shop;
