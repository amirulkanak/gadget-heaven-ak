import WishProductCard from './WishProductCard';
import useGlobalState from './../../hooks/useGlobalState';
import { toast } from 'react-toastify';

const WishlistContainer = () => {
  const { cart, setCart, wishlist, setWishlist } = useGlobalState();

  // Add product to cart
  const handleCart = (addProduct) => {
    // check if the product is already in the cart
    const isProductInCart = cart.find(
      (product) => product.product_id === addProduct.product_id
    );

    if (isProductInCart) {
      toast.error('Product already in cart');
      return;
    }
    setCart([...cart, addProduct]);
  };

  // Remove product from wishlist
  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(
      (product) => product.product_id !== productId
    );
    setWishlist(updatedWishlist);
  };

  return (
    <section className="max-width-wrapper w-full mt-12 mb-24">
      <h2 className="text-clr-woodsmoke text-[1.5rem] font-bold mb-8">
        Wishlist
      </h2>

      <div className="space-y-5">
        {wishlist.length === 0 && (
          <div className="text-clr-woodsmoke text-[1.125rem]">
            No products in the wishlist. Please add some products to the
            wishlist.
          </div>
        )}

        {wishlist.map((product) => (
          <WishProductCard
            key={product.product_id}
            product={product}
            handleCart={handleCart}
            handleRemoveFromWishlist={handleRemoveFromWishlist}
          />
        ))}
      </div>
    </section>
  );
};

export default WishlistContainer;
