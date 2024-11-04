import ProductCard from './ProductCard';
import useGlobalState from './../../hooks/useGlobalState';

const ProductCardsContainer = () => {
  const { allProducts } = useGlobalState();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 pc:grid-cols-3 gap-6">
      {/* Product Card */}
      {allProducts.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </section>
  );
};

export default ProductCardsContainer;
