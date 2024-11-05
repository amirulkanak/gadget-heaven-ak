import { BsSliders2Vertical } from 'react-icons/bs';
import CartProduct from './CartProduct';
import useGlobalState from './../../hooks/useGlobalState';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const CartContainer = () => {
  const { cart, setCart, totalPrice, setTotalPrice } = useGlobalState();

  const navigate = useNavigate();

  useEffect(() => {
    const totalCost = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(totalCost);
  }, [cart]);

  // handle sort by price
  const handleSortByPrice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  // Remove product from wishlist
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(
      (product) => product.product_id !== productId
    );
    setCart(updatedCart);
  };

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priceInModal, setPriceInModal] = useState(0);

  const closeModal = () => {
    setIsModalOpen(false);
    setPriceInModal(0);
    navigate('/');
  };

  // handle purchase
  const handlePurchase = () => {
    setPriceInModal(totalPrice);
    setIsModalOpen(true);
    setCart([]);
  };

  return (
    <section className="max-width-wrapper w-full mt-12 mb-24">
      <div className="mb-8">
        {/* balance */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-3">
          <h2 className="text-clr-woodsmoke text-[1.5rem] font-bold">Cart</h2>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <p className="text-clr-woodsmoke text-[1.5rem] font-bold">
              Total cost: ${totalPrice.toFixed(2)}
            </p>

            <div className="flex gap-2">
              <button
                onClick={handleSortByPrice}
                className="flex items-center justify-center gap-2 px-4 py-2 w-[13rem] min-h-14 text-xl font-bold  border border-clr-electric-violet rounded-[2rem] text-center text-clr-electric-violet bg-white">
                Sort by Price
                <BsSliders2Vertical />
              </button>

              <button
                disabled={totalPrice === 0 ? true : false}
                onClick={handlePurchase}
                className="w-[13rem] py-3 rounded-[2rem] text-xl font-bold text-white bg-clr-electric-violet">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="text-clr-woodsmoke/60 text-base font-medium">
          Total: ${priceInModal.toFixed(2)}
        </p>
      </Modal>

      <div className="space-y-4">
        {/* cart product */}
        {cart.length === 0 && (
          <p className="text-clr-woodsmoke text-xl font-medium">
            Your Shopping Cart is empty. Please add some products to Purchase.
          </p>
        )}

        {cart.map((product) => (
          <CartProduct
            key={product.product_id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
    </section>
  );
};

export default CartContainer;
