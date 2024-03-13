import Accordion from "../components/Accordion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="md:container mx-auto grid grid-cols-[1fr_1fr_1fr_1fr] w-full py-12">
        <Link to="/catalog" className="relative">
          <img src="/banner/man_banner.png" alt="man_banner" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-main-bg-dark flex items-center justify-center py-5 text-md font-medium">Мужская одежда</div>
        </Link>
        <Link to="/catalog" className="relative">
          <img src="/banner/man_banner.png" alt="man_banner" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-main-bg-dark flex items-center justify-center py-5 text-md font-medium">Мужская одежда</div>
        </Link>
        <Link to="/catalog" className="relative">
          <img src="/banner/man_banner.png" alt="man_banner" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-main-bg-dark flex items-center justify-center py-5 text-md font-medium">Мужская одежда</div>
        </Link>
        <Link to="/catalog" className="relative">
          <img src="/banner/man_banner.png" alt="man_banner" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-main-bg-dark flex items-center justify-center py-5 text-md font-medium">Мужская одежда</div>
        </Link>

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