import { CategoriesWrapper, CategoryBtn } from "../components/CategoriesWrapper";
import ProductCard from "../components/ProductCard";
import { categoryData } from "../data/categories";

import { productsData } from "../data/products";

export default function Catalog() {

  return (
    <section className="md:container m-auto pt-5">
      <CategoriesWrapper>
        <CategoryBtn id={0} name={"Все"} />
        { categoryData.map((category) => { return( <CategoryBtn id={category.id} name={category.name} />)})}
      </CategoriesWrapper>
      <div className="grid grid-cols-4 gap-x-10 gap-y-10 mt-12">
        { productsData.map((product) => { return (<ProductCard id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} />)})}
      </div>
    </section>
  )
}