import { NavLink } from 'react-router-dom';
import { LuMenu } from 'react-icons/lu';

const MobileMenu = ({ isHome }) => {
  return (
    <div className="da-dropdown da-dropdown-end md:hidden">
      {/* <!-- hamburger icon --> */}
      <div tabIndex="0" role="button" className="">
        <LuMenu
          className={`text-4xl ${
            isHome ? 'text-white' : 'text-clr-electric-violet'
          }`}
        />
      </div>

      {/* <!-- links --> */}
      <ul
        tabIndex="0"
        className="da-dropdown-content flex flex-col gap-1 items-center bg-slate-200 text-clr-electric-violet rounded-box z-[1] mt-3 w-52 p-4 shadow">
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? 'underline' : '')}>
          Home
        </NavLink>
        <NavLink
          to={'/statistics'}
          className={({ isActive }) => (isActive ? 'text-clr-woodsmoke' : '')}>
          Statistics
        </NavLink>
        <NavLink
          to={'/dashboard'}
          className={({ isActive }) => (isActive ? 'text-clr-woodsmoke' : '')}>
          Dashboard
        </NavLink>
      </ul>
    </div>
  );
};

export default MobileMenu;
