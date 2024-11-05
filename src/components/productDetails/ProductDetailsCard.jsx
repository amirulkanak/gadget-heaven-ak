import { LuHeart } from 'react-icons/lu';
import StarRatings from './StarRatings';

const ProductDetailsCard = ({
  product,
  handleCart,
  handleWishlist,
  wishlist,
}) => {
  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  const isProductInWishlist = wishlist.find(
    (p) => p.product_id === product.product_id
  );
  const isWished = isProductInWishlist ? true : false;

  return (
    <section className="max-width-wrapper p-8 bg-white rounded-[1.5rem]">
      <div className="flex flex-col items-center lg:flex-row gap-8">
        <div className="max-w-[26.51931rem] w-full min-h-[31.5rem] rounded-2xl">
          <img src={product_image} alt={product_title} />
        </div>

        <div>
          <div>
            <div className="space-y-4">
              <h3 className="text-clr-woodsmoke text-[1.75rem] font-bold">
                {product_title}
              </h3>
              <p className="text-clr-woodsmoke/80 text-xl font-semibold">
                Price: ${price}
              </p>
              <span className="da-badge da-badge-info">
                {availability ? 'In Stock' : 'Out of Stock'}
              </span>
              <p className="text-clr-woodsmoke/60 text-lg">{description}</p>
            </div>

            <div className="space-y-3 mt-3">
              <h3 className="text-clr-woodsmoke text-lg font-bold">
                Specification:
              </h3>
              <ol className="list-decimal list-inside">
                {specification.map((spec) => (
                  <li key={spec} className="text-clr-woodsmoke/70 text-lg">
                    {spec}
                  </li>
                ))}
              </ol>
            </div>

            {/* ratings */}
            <div className="flex items-center gap-2 mt-3">
              <p className="text-clr-woodsmoke text-lg font-bold">Ratings:</p>
              <StarRatings rating={rating} />
            </div>
          </div>

          {/* buttons */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => handleCart(product)}
              className="max-w-[12rem] w-full py-3 rounded-[2rem] text-white bg-clr-electric-violet">
              Add to Cart
            </button>
            <button
              onClick={() => handleWishlist(product)}
              disabled={isWished}
              className={`size-10 rounded-full border border-solid flex items-center justify-center ${
                isWished ? 'bg-rose-400' : 'bg-white'
              }`}>
              <LuHeart className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
