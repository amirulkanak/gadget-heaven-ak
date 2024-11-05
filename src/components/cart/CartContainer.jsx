import { BsSliders2Vertical } from 'react-icons/bs';
import CartProduct from './CartProduct';

const CartContainer = () => {
  return (
    <section className="max-width-wrapper mt-12 mb-24">
      <div className="mb-8">
        {/* balance */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-3">
          <h2 className="text-clr-woodsmoke text-[1.5rem] font-bold">Cart</h2>

          <div className="flex items-center gap-3">
            <p className="text-clr-woodsmoke text-[1.5rem] font-bold">
              Total cost: 9999.99
            </p>

            <button className="flex items-center justify-center gap-2 px-4 py-2 w-[13rem] min-h-14 text-xl font-bold  border border-clr-electric-violet rounded-[2rem] text-center text-clr-electric-violet bg-white">
              Sort by Price
              <BsSliders2Vertical />
            </button>

            <button className="w-[13rem] py-3 rounded-[2rem] text-xl font-bold text-white bg-clr-electric-violet">
              Purchase
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <CartProduct />
      </div>
    </section>
  );
};

export default CartContainer;
