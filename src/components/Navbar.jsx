import { Link, NavLink, useLocation } from 'react-router-dom';
import { LuShoppingCart } from 'react-icons/lu';
import { LuHeart } from 'react-icons/lu';

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/' ? true : false;

  return (
    <nav className="max-w-[96.5rem] w-full mx-auto px-2">
      <div className={isHome && 'bg-clr-electric-violet rounded-t-[2rem]'}>
        <section className="max-width-wrapper py-6 mt-6 flex items-center justify-between">
          {/* logo */}
          <Link
            to={'/'}
            className={`text-xl font-bold ${
              isHome ? 'text-white' : 'text-clr-woodsmoke'
            }`}>
            Gadget Heaven
          </Link>

          {/* navigation */}
          <ul
            className={`max-w-[20rem] w-full text-base font-bold flex items-center justify-between gap-2 
              ${isHome ? 'text-white' : 'text-clr-woodsmoke'}`}>
            <NavLink
              to={'/'}
              className={({ isActive }) => (isActive ? 'underline' : '')}>
              Home
            </NavLink>
            <NavLink
              to={'/statistics'}
              className={({ isActive }) => (isActive ? 'underline' : '')}>
              Statistics
            </NavLink>
            <NavLink
              to={'/dashboard'}
              className={({ isActive }) => (isActive ? 'underline' : '')}>
              Dashboard
            </NavLink>
          </ul>

          {/* Cart and wishlist icon */}
          <div className="flex items-center gap-4">
            <div className="da-indicator">
              <span className="da-indicator-item da-badge border-none bg-[#ead7fd] text-clr-electric-violet font-semibold">
                15
              </span>
              <div className="size-10 rounded-full border flex items-center justify-center bg-white">
                <LuShoppingCart className="text-xl" />
              </div>
            </div>

            <div className="da-indicator">
              <span className="da-indicator-item da-badge border-none bg-[#ead7fd] text-clr-electric-violet font-semibold">
                10
              </span>
              <div className="size-10 rounded-full border flex items-center justify-center bg-white">
                <LuHeart className="text-xl" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
