import { CategoryType, PropsType } from "../../types";

export function CategoryBtn({ id, name } : CategoryType): JSX.Element {
  return (
    <button data-id={id} className="px-5 py-2 border border-gray-600">
      {name}
    </button>
  );
}

export function CategoriesWrapper( { children }: PropsType): JSX.Element {
  return (
    <div className="flex items-center gap-3 justify-center">
      {children}
    </div>
  )
}