import axios from "axios";
import ProductCard, { ProductCardOnLoad } from "../components/cards/ProductCard"
import { Link, useSearchParams } from 'react-router-dom'
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

export default function SearchPage() {
  const [loading, setLoading] = useState(false);
  const [searchParams,] = useSearchParams()
  const searchQuery = searchParams.get('q');
  const [findedProducts, setFindedProducts] = useState<ProductResponse[]>();
  const placeholderProducts = Array.from({ length: 4 }, (_, i) => i);

  const fetchSuggestions = async () => {
    setLoading(true);
    const allProductsResponse = await axios.get(`https://fakestoreapi.com/products`)
    const productsDataFiltered: ProductResponse[] = allProductsResponse.data.filter((item: ProductResponse) =>
      item.title.toLowerCase().includes(searchQuery ? searchQuery.toLowerCase() : "")
    );
    setFindedProducts(productsDataFiltered);
    setLoading(false);
  }

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <section className="md:container m-auto pt-5">
      {findedProducts && findedProducts.length > 0 ? (
        <div className="grid grid-cols-4 gap-x-10 gap-y-10 mt-12">
          {loading ? placeholderProducts.map((_, idx) => (<ProductCardOnLoad key={idx} />))
            : findedProducts.map((product, key) => { return (<ProductCard key={key} id={parseInt(product.id)} imageUrl={product.image} name={product.title} price={Number(product.price)} />) })}
        </div>
      ) : (
        <section className="md:container m-auto pt-5">
          <h3 className="mt-4 text-5xl">Товар по запросу {searchQuery ? searchQuery + " " : ""}не найден</h3>
          <Link className="inline-block mt-7 py-3 px-6 rounded-lg bg-purple-400" to="/catalog">
            Вернуться в каталог
          </Link>
        </section>
      )}
    </section>
  )
}
