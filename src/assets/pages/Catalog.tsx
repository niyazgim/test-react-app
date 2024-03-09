import { useSearchParams } from "react-router-dom";
import { CategoriesWrapper, CategoryBtn } from "../components/CategoriesWrapper";
import ProductCard, { ProductCardOnLoad } from "../components/cards/ProductCard";

import axios from "axios";
import { ProductType } from "../../types";
import { useEffect, useState } from "react";

type ResponseType = {
  id: string,
  image: string,
  title: string,
  price: string,
}
export default function Catalog() {
  const [products, setProducts] = useState<ProductType[]>([]);

  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('cat');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const placeholderBlogs = Array.from({ length: 4 }, (_, i) => i);

  async function getAllCategories() {
    const allCategories = await axios.get(`https://fakestoreapi.com/products/categories`)
    setCategories(allCategories.data);
  }
  async function fetchProducts() {
    setLoading(true);
    let response;
    if (selectedCategory === "Все")
      response = await axios.get(`https://fakestoreapi.com/products/`);
    else
      response = await axios.get(`https://fakestoreapi.com/products/${selectedCategory && `/category/${selectedCategory}`}`);
    const product: ProductType[] = response.data.map((addedProduct: ResponseType) => ({
      id: addedProduct.id,
      imageUrl: addedProduct.image,
      name: addedProduct.title,
      price: addedProduct.price
    }));
    setProducts(product);
    setLoading(false);
  }
  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    getAllCategories();
    fetchProducts();
  }, []);

  return (
    <section className="md:container m-auto pt-5" >
      <CategoriesWrapper>
        <CategoryBtn name={"Все"} />
        {categories.map((category) => { return (<CategoryBtn name={category} />) })}
      </CategoriesWrapper>
      <div className="grid grid-cols-4 gap-x-10 gap-y-10 mt-12">
        {loading ? placeholderBlogs.map((_, idx) => (<ProductCardOnLoad key={idx} />))
          : products.map((product) => { return (<ProductCard id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} />) })}
      </div>
    </section >
  )
}