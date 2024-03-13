import ProductsSlider from "../components/ProductsSlider";
import Accordion from "../components/Accordion";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <>
      <section className="banner relative h-2/6">
        <img src="/banner/man_banner.png" alt="man_banner" />
        <div className="h-full relative z-10 flex flex-col justify-center items-center">
          <Logo className="h-16" />
          <h3 className="mt-10 md:text-2xl">Бренд одежды</h3>
          <Link to={`/catalog`}
            className="
            mt-10 py-4 px-6 rounded-md flex justify-center items-center 
            dark:bg-brand-dark hover:bg-brand-dark--hover 
            transition-all ease-out duration-250
            text-xl"
          >Перейти в каталог</Link>
        </div>
        <img src="/banner/woman_banner.png" alt="woman_banner" />
        <div className="banner__gradient absolute top-0 left-0 w-full h-full "></div>
      </section>
      <section className="md:container mx-auto pt-10">
        <h1 className="mb-5 text-3xl font-semibold">Реклама партнёра (всеавто.рф)</h1>
        <ProductsSlider />
      </section>
      <section className="md:container mx-auto pt-10">
        <h2 className="mb-5 text-2xl font-semibold">Вопрос-ответ</h2>
        <div className="grid grid-cols-4 gap-x-7 gap-y-7 mt-7">
          <Accordion question={"У вас лучшая одежда?"} answer={"Да"} />
          <Accordion question={"У вас лучшая одежда?"} answer={"Да"} />
          <Accordion question={"У вас лучшая одежда?"} answer={"Да"} />
          <Accordion question={"У вас лучшая одежда?"} answer={"Да"} />
        </div>
      </section>
    </>
  )
}