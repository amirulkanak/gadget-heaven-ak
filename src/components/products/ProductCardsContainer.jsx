import ProductCard from './ProductCard';

const ProductCardsContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 pc:grid-cols-3 gap-6">
      {/* Product Card */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default ProductCardsContainer;
