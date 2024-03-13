import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAnimate } from "framer-motion";
import { ProductSuggestionsCard } from "./cards/ProductCard";
import axios from "axios";
import { IconBtn } from "./Btn";

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

export default function SearchBar() {
  const [isOpen, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<ProductResponse[]>([]);
  const navigate = useNavigate();
  const [scope, animate] = useAnimate();
  const searchRef = useRef<HTMLInputElement>(null);

  const hanleOpening = () => {
    setOpen(!isOpen);
    setTimeout(() => {
      document.getElementById('search')?.focus();
    }, 0);
    if (isOpen) {
      animate(scope.current, { width: 0 }, {
        duration: 0.15,
        ease: "linear"
      });

      setTimeout(() => {
        animate(scope.current, { display: "none" }, { duration: 0 })
      }, 150)
    } else
      animate(scope.current, { width: 300, display: "flex" }, { duration: 0.15 })

  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        handleSearchOpenShortcut();
      } else if (event.key === 'Enter') {
        event.preventDefault();
        handleSearchShortcut();
      }
    };

    const handleSearchOpenShortcut = () => {
      isOpen ? document.getElementById('search')?.focus() : hanleOpening();
    };
    const handleSearchShortcut = () => {
      if (isOpen) handleSearchClick();
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  const location = useLocation();

  useEffect(() => {
    if (isOpen) hanleOpening();
    setSuggestions([]);
    setSearchQuery("");
    if (searchRef.current)
      searchRef.current.value = '';
  }, [location]);

  useEffect(() => {
    fetchSuggestions();
  }, [searchQuery]);

  const handleSearchClick = () => {
    navigate(`/search?q=${searchQuery}`)
  };

  const fetchSuggestions = async () => {
    setSuggestions([]);
    if (searchQuery.length > 0) {
      const allProductsResponse = await axios.get(`https://fakestoreapi.com/products`)
      const productsDataFiltered: ProductResponse[] = allProductsResponse.data.filter((item: ProductResponse) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions([...productsDataFiltered].sort(() => Math.random() - 0.5).slice(0, 5));
    }
  }
  return (
    <div className="h-8 flex gap-3">
      <div className="relative">
        <div ref={scope} id="searchContainer" className={`${isOpen ? `flex` : `hidden`} items-center gap-1 border rounded border-gray-800 focus-within:border-gray-600 `}>
          <input autoComplete="off" ref={searchRef} onChange={(e) => setSearchQuery(e.target.value)} id="search" type="search" className="w-full pl-2 bg-transparent focus-visible:outline-none" />
          <button onClick={handleSearchClick} className={`h-4 ${isOpen ? `flex` : `hidden`}  justify-center items-center m-2`}>
            <svg className="h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="#F0F0F0" />
            </svg>
          </button>
        </div>
        {searchQuery ? (
          <div className={`${isOpen ? `block` : `hidden`} absolute z-40 top-12 left-0 bg-gray-900 rounded w-full`}>
            {suggestions.map((product, key) => { return (<ProductSuggestionsCard key={key} id={parseInt(product.id)} imageUrl={product.image} name={product.title} price={Number(product.price)} />) })}
          </div>
        ) : null}
      </div>
      <IconBtn onClick={hanleOpening}>
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isOpen ? (
            <path d="M6.61136 19.1859L5.21136 17.7859L10.8114 12.1859L5.21136 6.58591L6.61136 5.18591L12.2114 10.7859L17.8114 5.18591L19.2114 6.58591L13.6114 12.1859L19.2114 17.7859L17.8114 19.1859L12.2114 13.5859L6.61136 19.1859Z" fill="#F0F0F0" />
          ) : (
            <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="#F0F0F0" />
          )}
        </svg>
      </IconBtn>
    </div >
  )
}