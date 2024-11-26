import { Link, useParams } from 'react-router-dom';
import ProductDetailsCard from './ProductDetailsCard';
import useGlobalState from './../../hooks/useGlobalState';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const ProductDetailsContainer = () => {
  const {
    allProducts,
    setAllProducts,
    setCategoryProducts,
    cart,
    setCart,
    wishlist,
    setWishlist,
  } = useGlobalState();
  const { product_id: id } = useParams();
  const [product, setProduct] = useState(null);

  // Find the product by product_id
  useEffect(() => {
    if (allProducts.length === 0) {
      fetch('/gadgetData.json')
        .then((response) => response.json())
        .then((data) => {
          setAllProducts(data);
          setCategoryProducts(data);
          const foundProduct = data.find(
            (product) => product.product_id === id
          );
          setProduct(foundProduct);
        });
    } else {
      const foundProduct = allProducts.find(
        (product) => product.product_id === id
      );
      setProduct(foundProduct);
    }
  }, [id, allProducts, setCategoryProducts]);

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
    <>
      {product && (
        <section className="max-width-wrapper -mt-[13rem] mb-24">
          {/* Product Found */}

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
      )}
      {/* Product not Found */}
      {!product && (
        <div className="max-width-wrapper mt-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Product not found</h2>
            <p className="mt-4 text-xl">
              The product you are looking for is not available. Please check
              back later.
            </p>
          </div>
          <Link
            to={'/'}
            className="block mt-10 w-fit px-6 py-2 text-xl border border-solid border-clr-electric-violet/60 rounded-[2rem] text-center">
            Back to Products
          </Link>
        </div>
      )}
    </>
  );
};

export default ProductDetailsContainer;
