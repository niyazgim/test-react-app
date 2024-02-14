import {Categories, CategoriesWrapper} from "../components/CategoriesWrapper";
import ProductCard from "../components/ProductCard";

export default function Catalog() {
  const categoriesData: Categories = {
    1: "Топ",
    2: "Низ",
    3: "Обувь",
  };
  return (
    <section className="md:container m-auto pt-5">
      <CategoriesWrapper categories={categoriesData} />
      <div className="grid grid-cols-4 gap-x-10 mt-12">
        <ProductCard imageUrl={"shirt1.png"} name={"test"} price={12345} />
        <ProductCard imageUrl={"shirt1.png"} name={"test"} price={12345} />
        <ProductCard imageUrl={"shirt1.png"} name={"test"} price={12345} />
        <ProductCard imageUrl={"shirt.png"} name={"test"} price={12345} />
      </div>
    </section>
  )
}