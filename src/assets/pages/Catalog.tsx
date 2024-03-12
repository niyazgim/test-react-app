import { useSearchParams } from "react-router-dom";
import { CategoriesWrapper, CategoryBtn } from "../components/CategoriesWrapper";
import ProductCard, { ProductCardOnLoad } from "../components/cards/ProductCard";

import axios from "axios";
import { CategoryType, ProductType } from "../../types";
import { useEffect, useState } from "react";
import Select from 'react-select'
import useQueryParamsManager from "../hooks/useQueryParamsManager";


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
  const selectedSort = searchParams.get('sort');
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(false);

  const placeholderBlogs = Array.from({ length: 4 }, (_, i) => i);

  async function getAllCategories() {
    const allCategoriesResponse = await axios.get(`https://fakestoreapi.com/products/categories`)
    let label: string;
    const allCategories: CategoryType[] = [];
    allCategoriesResponse.data.map((category: string) => {
      switch (category) {
        case ('electronics'):
          label = 'Электроника';
          break;
        case ('jewelery'):
          label = 'Ювелирные украшения';
          break;
        case ('men\'s clothing'):
          label = 'Мужская одежда';
          break;
        case ('women\'s clothing'):
          label = 'Женская одежда';
          break;
        default:
          label = category;
          break;
      }
      allCategories.push({ value: category, label: label });
    })
    setCategories(allCategories);
  }
  async function fetchProducts() {
    setLoading(true);
    let response;
    if (selectedCategory === "Все" || !selectedCategory)
      response = await axios.get(`https://fakestoreapi.com/products?${selectedSort ? `sort=${selectedSort}` : ""}`);
    else
      response = await axios.get(`https://fakestoreapi.com/products/${selectedCategory && `/category/${selectedCategory}?`}${selectedSort ? `sort=${selectedSort}` : ""}`);
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
    fetchProducts();
  }, [selectedSort]);

  useEffect(() => {
    getAllCategories();
    fetchProducts();
  }, []);

  const sortingOptions = [
    { value: 'desc', label: 'По убыванию' },
    { value: 'asc', label: 'По возрастанию' },
  ]

  const manageQueryParams = useQueryParamsManager();
  return (
    <section className="md:container m-auto pt-5" >
      <div className="flex items-center justify-between">
        <CategoriesWrapper>
          <CategoryBtn label={"Все"} value="Все" />
          {categories.map((category, key) => { return (<CategoryBtn key={key} label={category.label} value={category.value} />) })}
        </CategoriesWrapper>
        <Select
          isClearable
          options={sortingOptions}
          placeholder="Сортировать по"
          onChange={e => {
            const temp = e as unknown as { value: string, label: string, };
            if (temp)
              manageQueryParams({ sort: temp.value });
          }}
          className="my-react-select-container w-64"
          classNamePrefix="my-react-select"
        />
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-10 mt-12">
        {loading ? placeholderBlogs.map((_, idx) => (<ProductCardOnLoad key={idx} />))
          : products.map((product, key) => { return (<ProductCard key={key} id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} />) })}
      </div>
    </section >
  )
}