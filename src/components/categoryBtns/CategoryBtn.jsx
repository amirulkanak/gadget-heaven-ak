import { NavLink } from 'react-router-dom';

const CategoryBtn = ({ children, handleCategoryBtnClick }) => {
  return (
    <NavLink
      to={`/${children}`}
      onClick={() => handleCategoryBtnClick(children)}
      className={({ isActive }) =>
        `max-w-[12rem] w-full py-3 rounded-[2rem] text-center ${
          isActive
            ? 'text-white bg-clr-electric-violet'
            : 'text-clr-woodsmoke bg-slate-300'
        }`
      }>
      {children}
    </NavLink>
  );
};

export default CategoryBtn;
