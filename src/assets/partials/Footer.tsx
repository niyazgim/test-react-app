import { FooterLinks } from "../components/NavLinks";
import { LinksType } from "../../types";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { LinkBtn } from "../components/Btn";

export default function footer() {
  const linksData1: LinksType[] = [
    { url: "/", name: "Главная", },
    { url: "/catalog", name: "Каталог", },
  ];
  const linksData2: LinksType[] = [
    { url: "/users", name: "Вакансии" },
    { url: "/users", name: "Информация для сотрудников" },
  ];
  const linksData3: LinksType[] = [
    { url: "/about", name: "Стать партнёров" },
    { url: "/about", name: "Выгода для партнёров" },
  ];
  const linksData4: LinksType[] = [
    { url: "/about", name: "Оформить возврат" },
    { url: "/about", name: "Способы оплаты" },
    { url: "/about", name: "Бонусная программа" },
  ];
  const linksData5: LinksType[] = [
    { url: "/news", name: "Новости моды" },
    { url: "/users", name: "Новинки" },
  ];

  return (
    <footer className="pt-5 pb-12 mt-24">
      <nav className="md:container m-auto">
        <div className="flex gap-7 items-end">
          <Link to="/">
            <Logo className="h-10" />
          </Link>
        </div>
        <div
          className="mt-12 w-full grid grid-cols-5 gap-x-10"
        >
          <FooterLinks>
            <h3 className="text-2xl font-bold mb-3">О нас</h3>
            {linksData1.map((link, key) => { return (<Link className="text-xl" key={key} to={link.url}>{link.name}</Link>) })}
          </FooterLinks>
          <FooterLinks>
            <h3 className="text-2xl font-bold mb-3">Партнёрам</h3>
            {linksData2.map((link, key) => { return (<Link className="text-xl" key={key} to={link.url}>{link.name}</Link>) })}
          </FooterLinks>
          <FooterLinks>
            <h3 className="text-2xl font-bold mb-3">Сотрудникам</h3>
            {linksData3.map((link, key) => { return (<Link className="text-xl" key={key} to={link.url}>{link.name}</Link>) })}
          </FooterLinks>
          <FooterLinks>
            <h3 className="text-2xl font-bold mb-3">Клиентам</h3>
            {linksData4.map((link, key) => { return (<Link className="text-xl" key={key} to={link.url}>{link.name}</Link>) })}
          </FooterLinks>
          <FooterLinks>
            <h3 className="text-2xl font-bold mb-3">События</h3>
            {linksData5.map((link, key) => { return (<Link className="text-xl" key={key} to={link.url}>{link.name}</Link>) })}
          </FooterLinks>
        </div>
      </nav>
      <div className="md:container mx-auto mt-5">
        <div className="flex gap-10 items-center">
          <LinkBtn to={"https://github.com/niyazgim"} className="!bg-inherit hover:dark:!bg-neutral-800 gap-3">
            <svg className="w-10 h-10" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_107_27)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217C0 70.973 13.993 89.389 33.405 95.907C35.832 96.397 36.721 94.848 36.721 93.545C36.721 92.404 36.641 88.493 36.641 84.418C23.051 87.352 20.221 78.551 20.221 78.551C18.037 72.847 14.801 71.381 14.801 71.381C10.353 68.366 15.125 68.366 15.125 68.366C20.059 68.692 22.648 73.418 22.648 73.418C27.015 80.914 34.052 78.796 36.883 77.492C37.287 74.314 38.582 72.114 39.957 70.892C29.118 69.751 17.714 65.514 17.714 46.609C17.714 41.231 19.654 36.831 22.728 33.409C22.243 32.187 20.544 27.134 23.214 20.371C23.214 20.371 27.339 19.067 36.64 25.423C40.6221 24.3457 44.7288 23.7976 48.854 23.793C52.979 23.793 57.184 24.364 61.067 25.423C70.369 19.067 74.494 20.371 74.494 20.371C77.164 27.134 75.464 32.187 74.979 33.409C78.134 36.831 79.994 41.231 79.994 46.609C79.994 65.514 68.59 69.669 57.67 70.892C59.45 72.44 60.986 75.373 60.986 80.018C60.986 86.618 60.906 91.915 60.906 93.544C60.906 94.848 61.796 96.397 64.222 95.908C83.634 89.388 97.627 70.973 97.627 49.217C97.707 22 75.788 0 48.854 0Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_107_27">
                  <rect width="98" height="96" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-mono">
              niyazgim
            </span>
          </LinkBtn>
        </div>
      </div>
    </footer>
  )
}