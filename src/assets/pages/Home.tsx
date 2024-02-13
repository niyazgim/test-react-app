import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="banner relative h-2/6">
      <img src="/test-react-app/banner/man_banner.png" alt="man_banner" />
      <div className="h-full relative z-10 flex flex-col justify-center items-center">
        <img src="/test-react-app/logo/logo.svg" className="h-24" alt="logo" />
        <h3 className="mt-5 md:text-2xl">Бренд одежды</h3>
        <Link to="/catalog" className="mt-7 py-3 px-6 rounded-lg bg-purple-400">Перейти в категории</Link>
      </div>
      <img src="/test-react-app/banner/woman_banner.png" alt="woman_banner" />
      <div className="banner__gradient absolute top-0 left-0 w-full h-full "></div>
    </section>
  )
}