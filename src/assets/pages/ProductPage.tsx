import axios from "axios";
import ProductImage from "../components/images/ProductImage";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface ProductResponse {
  id: string,
  title: string,
  price: string,
  category: string,
  image: string,
  // rating: {
  //   rate: string,
  //   count: string,
  // }
}


export default function ProductPage() {
  const [product, setProduct] = useState<ProductResponse>();
  const [error, setError] = useState<boolean>(false);
  const { id } = useParams();


  async function fetchProduct(id: string) {
    setError(false);
    const productResponse = await axios.get(`https://fakestoreapi.com/products/${id}`)
    if (productResponse.data)
      setProduct(productResponse.data);
    else setError(true);
  }

  useEffect(() => {
    if (id)
      fetchProduct(id);
  }, [id]);

  if (id) {
    if (product) {
      return (
        <section className="md:container m-auto pt-5">
          <div className="relative w-full grid grid-cols-[minmax(900px,_1fr)_500px] gap-x-10">
            <div className="grid gap-y-4">
              <div className="grid gap-x-4 grid-cols-[1fr_1fr]">
                <ProductImage imageUrl={product.image} altText={product.title} />
                <ProductImage imageUrl={product.image} altText={product.title} />
              </div>
              <div className="grid gap-x-4 gap-y-8 grid-cols-[1fr_1fr_1fr]">
                <ProductImage imageUrl={product.image} altText={product.title} />
                <ProductImage imageUrl={product.image} altText={product.title} />
                <ProductImage imageUrl={product.image} altText={product.title} />
              </div>
            </div>
            <div className="sticky top-10 self-start">
              <h3 className="text-3xl">{product.title}</h3>
              <p className="mt-2 text-2xl font-semibold">{product.price} $</p>
              <div className="flex items-center gap-2 h-16 mt-10">
                <button

                  className="
            h-full py-4 px-6 rounded-md flex justify-center items-center 
            dark:bg-brand-dark hover:bg-brand-dark--hover 
            transition-all ease-out duration-250
            text-xl"
                >
                  Добавить в корзину
                </button>
                <button

                  className="
            h-full py-4 px-6 rounded-md flex justify-center items-center 
            dark:bg-brand-dark hover:bg-brand-dark--hover 
            transition-all ease-out duration-250
            text-xl"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21L10.55 19.7C8.86667 18.1834 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6875 3.75 12.8125C3.1 11.9375 2.64583 11.1334 2.3875 10.4C2.12917 9.66669 2 8.91669 2 8.15002C2 6.58336 2.525 5.27502 3.575 4.22502C4.625 3.17502 5.93333 2.65002 7.5 2.65002C8.36667 2.65002 9.19167 2.83336 9.975 3.20002C10.7583 3.56669 11.4333 4.08336 12 4.75002C12.5667 4.08336 13.2417 3.56669 14.025 3.20002C14.8083 2.83336 15.6333 2.65002 16.5 2.65002C18.0667 2.65002 19.375 3.17502 20.425 4.22502C21.475 5.27502 22 6.58336 22 8.15002C22 8.91669 21.8708 9.66669 21.6125 10.4C21.3542 11.1334 20.9 11.9375 20.25 12.8125C19.6 13.6875 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1834 13.45 19.7L12 21ZM12 18.3C13.6 16.8667 14.9167 15.6375 15.95 14.6125C16.9833 13.5875 17.8 12.6959 18.4 11.9375C19 11.1792 19.4167 10.5042 19.65 9.91252C19.8833 9.32086 20 8.73336 20 8.15002C20 7.15002 19.6667 6.31669 19 5.65002C18.3333 4.98336 17.5 4.65002 16.5 4.65002C15.7167 4.65002 14.9917 4.87086 14.325 5.31252C13.6583 5.75419 13.2 6.31669 12.95 7.00002H11.05C10.8 6.31669 10.3417 5.75419 9.675 5.31252C9.00833 4.87086 8.28333 4.65002 7.5 4.65002C6.5 4.65002 5.66667 4.98336 5 5.65002C4.33333 6.31669 4 7.15002 4 8.15002C4 8.73336 4.11667 9.32086 4.35 9.91252C4.58333 10.5042 5 11.1792 5.6 11.9375C6.2 12.6959 7.01667 13.5875 8.05 14.6125C9.08333 15.6375 10.4 16.8667 12 18.3Z" fill="#F0F0F0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      )
    } else {
      if (error) {
        return (
          <section className="md:container m-auto pt-5">
            <h3 className="mt-4 text-5xl">Товар не найден</h3>
            <Link to={`/catalog`}
              className="
              w-fit mt-10 py-4 px-6 rounded-md flex justify-center items-center 
              dark:bg-brand-dark hover:bg-brand-dark--hover 
              transition-all ease-out duration-250
              text-xl"
            >Вернуться в каталог</Link>
          </section>
        )
      }
    }
  }
}