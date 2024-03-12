import { CategoryType, PropsType } from "../../types";
import { useSearchParams } from "react-router-dom";
import useQueryParamsManager from "../hooks/useQueryParamsManager";


export function CategoryBtn({ value, label }: CategoryType): JSX.Element {
  const manageQueryParams = useQueryParamsManager();
  let isSelected = false;
  const [searchParams] = useSearchParams();

  const selectedCategory = searchParams.get('cat');
  if ((!selectedCategory && !value) || (value === selectedCategory)) isSelected = true;

  return (
    <button onClick={() => manageQueryParams({ cat: value })} className={`px-5 py-2 border ${isSelected ? `border-gray-400` : `border-gray-600`}`}>
      {label}
    </button>
  );
}

export function CategoriesWrapper({ children }: PropsType): JSX.Element {
  return (
    <div className="flex items-center gap-3 justify-center">
      {children}
    </div>
  )
}