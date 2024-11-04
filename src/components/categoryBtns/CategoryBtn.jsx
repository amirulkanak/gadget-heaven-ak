const CategoryBtn = ({
  children,
  handleCategoryBtnClick,
  activeCategoryBtn,
}) => {
  return (
    <button
      onClick={() => handleCategoryBtnClick(children)}
      className={`max-w-[12rem] w-full py-3 rounded-[2rem] ${
        activeCategoryBtn === children
          ? 'text-white bg-clr-electric-violet'
          : 'text-clr-woodsmoke bg-slate-300'
      }`}>
      {children}
    </button>
  );
};

export default CategoryBtn;
