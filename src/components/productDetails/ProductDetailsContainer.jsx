import { Link, useParams } from 'react-router-dom';
import ProductDetailsCard from './ProductDetailsCard';
import useGlobalState from './../../hooks/useGlobalState';
import { toast } from 'react-toastify';

const ProductDetailsContainer = () => {
  const { allProducts, cart, setCart, wishlist, setWishlist } =
    useGlobalState();
  const { product_id: id } = useParams();

  // Find the product by product_id
  const product = allProducts.find((product) => product.product_id === id);

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
    toast.success('Product added to cart');
  };

  // Add product to wishlist
  const handleWishlist = (addProduct) => {
    setWishlist([...wishlist, addProduct]);
    toast.success('Product added to wishlist');
  };

  return (
    <section className="max-width-wrapper -mt-[13rem] mb-24">
      <ProductDetailsCard
        product={product}
        handleCart={handleCart}
        handleWishlist={handleWishlist}
        wishlist={wishlist}
      />

      <Link
        to={'/'}
        className="block w-fit mt-6 px-6 py-2 text-xl border border-solid border-clr-electric-violet/60 rounded-[2rem] text-center">
        Back to Products
      </Link>
    </section>
  );
};

export default ProductDetailsContainer;
