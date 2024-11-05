import PageDescription from '../components/PageDescription';
import PageHeading from './../components/PageHeading';

const DashboardPage = () => {
  document.title = 'Dashboard | Gadget Heaven';
  return (
    <section className="py-8 bg-clr-electric-violet">
      <div className="max-width-wrapper flex flex-col items-center gap-4">
        <PageHeading>Dashboard</PageHeading>

        <PageDescription>
          Explore your cart and wishlist of gadgets. Add or remove items from
          the cart or wishlist. Purchase when you are ready. Happy shopping!
        </PageDescription>

        {/* Action buttons */}
        <div className="flex gap-4 items-center mt-4">
          <button className="px-4 py-2 w-[10rem] text-white text-xl font-bold bg-clr-electric-violet border border-white rounded-[2rem]">
            Cart
          </button>
          <button className="px-4 py-2 w-[10rem] text-white text-xl font-bold bg-clr-electric-violet border border-white rounded-[2rem]">
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
