import { useSearchParams } from "react-router-dom";
import { CategoriesWrapper, CategoryBtn } from "../components/CategoriesWrapper";
import ProductCard from "../components/ProductCard";
import { productsCategoryData } from "../data/categories";

import { productsData } from "../data/products";

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('cid');
  let productsDataSorted = productsData;
  if (selectedCategory)
    productsDataSorted = productsData.filter(item => { return item.category_id === parseInt(selectedCategory) });

  return (
    <section className="md:container m-auto pt-5" >
      <CategoriesWrapper>
        <CategoryBtn id={null} name={"Все"} />
        {productsCategoryData.map((category) => { return (<CategoryBtn id={category.id} name={category.name} />) })}
      </CategoriesWrapper>
      <div className="grid grid-cols-4 gap-x-10 gap-y-10 mt-12">
        {productsDataSorted.map((product) => { return (<ProductCard id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} />) })}
      </div>
    </section >
  )
}