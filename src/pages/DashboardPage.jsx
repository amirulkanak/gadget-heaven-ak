import { NavLink, Outlet } from 'react-router-dom';
import PageDescription from '../components/PageDescription';
import PageHeading from './../components/PageHeading';

const DashboardPage = () => {
  document.title = 'Dashboard | Gadget Heaven';
  return (
    <>
      <section className="py-8 bg-clr-electric-violet">
        <div className="max-width-wrapper flex flex-col items-center gap-4">
          <PageHeading>Dashboard</PageHeading>

          <PageDescription>
            Explore your cart and wishlist of gadgets. Add or remove items from
            the cart or wishlist. Purchase when you are ready. Happy shopping!
          </PageDescription>

          {/* Action buttons */}
          <div className="flex gap-4 items-center mt-4">
            <NavLink
              to={'/dashboard/cart'}
              className={({ isActive }) =>
                `px-4 py-2 w-[10rem] text-xl font-bold  border border-white rounded-[2rem] text-center ${
                  isActive
                    ? 'bg-white text-clr-electric-violet'
                    : 'bg-clr-electric-violet text-white'
                }`
              }>
              Cart
            </NavLink>

            <NavLink
              to={'/dashboard/wishlist'}
              className={({ isActive }) =>
                `px-4 py-2 w-[10rem] text-xl font-bold  border border-white rounded-[2rem] text-center ${
                  isActive
                    ? 'bg-white text-clr-electric-violet'
                    : 'bg-clr-electric-violet text-white'
                }`
              }>
              Wishlist
            </NavLink>
          </div>
        </div>
      </section>

      {/* dynamic content of cart and wish list */}
      <Outlet />
    </>
  );
};

export default DashboardPage;
