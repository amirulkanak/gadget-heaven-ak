import { Link, NavLink, useLocation } from 'react-router-dom';
import { LuShoppingCart, LuUser, LuHeart } from 'react-icons/lu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/' ? true : false;

  return (
    <nav className="max-w-[96.5rem] w-full mx-auto px-2">
      <div className={isHome ? 'bg-clr-electric-violet rounded-t-[2rem]' : ''}>
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
            className={`hidden max-w-[20rem] w-full text-base font-bold md:flex items-center justify-between gap-2 
              ${isHome ? 'text-white' : 'text-clr-woodsmoke'}`}>
            <NavLink
              to={'/'}
              className={({ isActive }) => (isActive ? 'underline' : '')}>
              Home
            </NavLink>
            <NavLink
              to={'/statistics'}
              className={({ isActive }) =>
                isActive ? 'text-clr-electric-violet' : ''
              }>
              Statistics
            </NavLink>
            <NavLink
              to={'/dashboard/cart'}
              className={({ isActive }) =>
                isActive ? 'text-clr-electric-violet' : ''
              }>
              Dashboard
            </NavLink>
          </ul>

          {/* Cart and wishlist icon */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* cart */}
            <div className="da-indicator">
              <span className="da-indicator-item da-badge border-none bg-[#ead7fd] text-clr-electric-violet font-semibold">
                15
              </span>
              <NavLink
                to={'/user'}
                className={({ isActive }) =>
                  `size-10 rounded-full border border-solid flex items-center justify-center bg-white ${
                    isActive
                      ? 'border-clr-electric-violet text-clr-electric-violet'
                      : ''
                  }`
                }>
                <LuShoppingCart className="text-xl" />
              </NavLink>
            </div>

            {/* wishlist */}
            <div className="da-indicator">
              <span className="da-indicator-item da-badge border-none bg-[#ead7fd] text-clr-electric-violet font-semibold">
                10
              </span>
              <NavLink
                to={'/user'}
                className={({ isActive }) =>
                  `size-10 rounded-full border border-solid flex items-center justify-center bg-white ${
                    isActive
                      ? 'border-clr-electric-violet text-clr-electric-violet'
                      : ''
                  }`
                }>
                <LuHeart className="text-xl" />
              </NavLink>
            </div>

            {/* user icon */}
            <NavLink
              to={'/user'}
              className={({ isActive }) =>
                `size-10 rounded-full border border-solid flex items-center justify-center bg-white ${
                  isActive
                    ? 'border-clr-electric-violet text-clr-electric-violet'
                    : ''
                }`
              }>
              <LuUser className="text-xl" />
            </NavLink>

            {/* Mobile menu */}
            <MobileMenu isHome={isHome} />
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
