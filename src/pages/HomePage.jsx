import CategoryBtnsContainer from '../components/categoryBtns/CategoryBtnsContainer';
import ProductCardsContainer from '../components/products/ProductCardsContainer';
import Header from './../components/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <h2 className="mt-24 text-clr-woodsmoke text-2xl lg:text-[2.5rem] leading-[3.125rem] font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h2>

        {/* Gadget section*/}
        <section className="max-width-wrapper flex flex-col items-center lg:flex-row lg:items-start gap-6 mt-12 mb-24">
          {/* Category buttons container */}
          <CategoryBtnsContainer />

          {/* Product Card Container */}
          <ProductCardsContainer />
        </section>
      </main>
    </>
  );
};

export default HomePage;
