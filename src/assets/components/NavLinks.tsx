import { Link } from "react-router-dom";

export type Links = {
  [ulr: string]: string;
}
const NavLinks = ({ links }: { links: Links }): JSX.Element => {
  
  const NavLink = ({ url, name }: { url: string; name: string }): JSX.Element => {
    return (
      <Link to={url}>{name}</Link>
    );
  };
  
  return (
    <ul className="w-fit flex gap-3 pl-3 border-l-2 border-gray-300">
      {Object.entries(links).map(([url, name]) => (
        <NavLink key={url} url={url} name={name} />
      ))}
    </ul>
  );
};

export {NavLinks};