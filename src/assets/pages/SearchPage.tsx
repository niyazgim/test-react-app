// import ProductCard from "../components/cards/ProductCard"
// import { productsData } from "../data/products"
// import { Link, useSearchParams } from 'react-router-dom'

// export default function SearchPage() {
//   const [searchParams,] = useSearchParams()
//   const searchQuery = searchParams.get('q');

//   const productsDataSorted = productsData.filter(item =>
//     item.name.toLowerCase().includes((searchQuery ? searchQuery : "").toLowerCase())
//   );

//   return (
//     <section className="md:container m-auto pt-5">
//       {productsDataSorted.length > 0 ? (
//         <div className="grid grid-cols-4 gap-x-10 gap-y-10 mt-12">
//           {productsDataSorted.map((product) => { return (<ProductCard id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} />) })}
//         </div>
//       ) : (
//         <section className="md:container m-auto pt-5">
//           <h3 className="mt-4 text-5xl">Товар по запросу {searchQuery ? searchQuery + " " : ""}не найден</h3>
//           <Link className="inline-block mt-7 py-3 px-6 rounded-lg bg-purple-400" to="/catalog">
//             Вернуться в каталог
//           </Link>
//         </section>
//       )}
//     </section>
//   )
// }