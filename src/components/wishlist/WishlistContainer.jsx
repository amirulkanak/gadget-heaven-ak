import WishProductCard from './WishProductCard';

const WishlistContainer = () => {
  return (
    <section className="max-width-wrapper mt-12 mb-24">
      <h2 className="text-clr-woodsmoke text-[1.5rem] font-bold mb-8">
        Wishlist
      </h2>

      <div className="space-y-5">
        <WishProductCard />
        <WishProductCard />
        <WishProductCard />
      </div>
    </section>
  );
};

export default WishlistContainer;
