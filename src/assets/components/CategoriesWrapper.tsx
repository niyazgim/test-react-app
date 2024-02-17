import { CategoryType, PropsType } from "../../types";
import { Link, useSearchParams } from "react-router-dom";

export function CategoryBtn({ id, name }: CategoryType): JSX.Element {
  let isSelected = false;
  const [searchParams] = useSearchParams();

  const selectedCategory = searchParams.get('cid');
  if ((!selectedCategory && !id) || (id === Number(selectedCategory))) isSelected = true;

  return (
    <Link to={`/catalog?${id ? `cid=${id}` : ``}`} data-id={id} className={`px-5 py-2 border ${isSelected ? `border-gray-400` : `border-gray-600`}`}>
      {name}
    </Link>
  );
}

export function CategoriesWrapper({ children }: PropsType): JSX.Element {
  return (
    <div className="flex items-center gap-3 justify-center">
      {children}
    </div>
  )
}