import { useEffect, useState } from "react";
import { IconBtn } from "./Btn";
import { ProductCartCard } from "./cards/ProductCard";
import { CartProductType } from "../../types";

export default function Cart() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCartProducts(JSON.parse(localStorage.getItem('cart')!));
      console.log(cartProducts);
    }
  }, [localStorage.getItem('cart')]);
  return (
    <div>
      <IconBtn className={`${isOpen ? `dark:bg-neutral-900 rounded-es-none rounded-ee-none dark:hover:bg-neutral-900` : ``} relative`} onClick={() => setIsOpen(!isOpen)}>
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V8C4 7.45 4.19583 6.97917 4.5875 6.5875C4.97917 6.19583 5.45 6 6 6H8C8 4.9 8.39167 3.95833 9.175 3.175C9.95833 2.39167 10.9 2 12 2C13.1 2 14.0417 2.39167 14.825 3.175C15.6083 3.95833 16 4.9 16 6H18C18.55 6 19.0208 6.19583 19.4125 6.5875C19.8042 6.97917 20 7.45 20 8V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM6 20H18V8H16V10C16 10.2833 15.9042 10.5208 15.7125 10.7125C15.5208 10.9042 15.2833 11 15 11C14.7167 11 14.4792 10.9042 14.2875 10.7125C14.0958 10.5208 14 10.2833 14 10V8H10V10C10 10.2833 9.90417 10.5208 9.7125 10.7125C9.52083 10.9042 9.28333 11 9 11C8.71667 11 8.47917 10.9042 8.2875 10.7125C8.09583 10.5208 8 10.2833 8 10V8H6V20ZM10 6H14C14 5.45 13.8042 4.97917 13.4125 4.5875C13.0208 4.19583 12.55 4 12 4C11.45 4 10.9792 4.19583 10.5875 4.5875C10.1958 4.97917 10 5.45 10 6Z" fill="#F0F0F0" />
        </svg>
        <div className={`${cartProducts?.length > 0 ? `absolute -right-1 -top-1 rounded-full w-5 h-5 flex items-center justify-center
        text-[0.75rem] 
        dark:bg-brand-dark dark:text-white` : `hidden`} `}>
          {cartProducts?.length}
        </div>
      </IconBtn>
      <div className="relative">
        <div
          className={`${isOpen ? `block` : `hidden`} absolute z-40 right-0 top-0 p-2
          rounded-2xl rounded-se-none w-[30rem]
        dark:bg-neutral-900`}
        >
          {cartProducts.length > 0 ?
            cartProducts.map((cartProduct, key) => (<ProductCartCard key={key} productId={cartProduct.productId} quantity={cartProduct.quantity} />)) : (
              <p>Вы ничего не добавили в корзину</p>
            )}
        </div>
      </div>
    </div>
  )
}