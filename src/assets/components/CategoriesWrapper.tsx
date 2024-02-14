export type Categories = {
  [id: number]: string;
}
const CategoriesWrapper = ({ categories }: { categories: Categories }): JSX.Element => {
  
  const CategoryBtn = ({ id, name }: { id: number; name: string }): JSX.Element => {
    return (
      <button data-id={id} className="px-5 py-2 border border-gray-600">
        {name}
      </button>
    );
  };
  
  return (
    <div className="flex items-center gap-3 justify-center">
      <CategoryBtn id={0} name={"Все"} />
      {Object.entries(categories).map(([id, name]) => (
        <CategoryBtn key={id} id={parseInt(id)} name={name} />
      ))}
    </div>
  );
};

export {CategoriesWrapper};