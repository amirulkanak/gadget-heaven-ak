import PageDescription from '../components/PageDescription';
import PageHeading from '../components/PageHeading';
import ProductDetailsContainer from '../components/productDetails/ProductDetailsContainer';

const ProductDetailsPage = () => {
  document.title = 'Product Details | Gadget Heaven';
  return (
    <>
      <section className="pt-8 pb-[15rem] bg-clr-electric-violet">
        <div className="max-width-wrapper flex flex-col items-center gap-4">
          <PageHeading>Product Details</PageHeading>

          <PageDescription>
            View the details of the product. Check the price, ratings, and
            reviews to make an informed decision. Happy shopping!
          </PageDescription>
        </div>
      </section>

      <ProductDetailsContainer />
    </>
  );
};

export default ProductDetailsPage;
