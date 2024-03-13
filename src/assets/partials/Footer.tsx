import { FooterLinks } from "../components/NavLinks";
import { LinksType } from "../../types";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

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
    <footer className="pt-5 pb-36 mt-24">
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
    </footer>
  )
}