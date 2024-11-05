import { LuHeart } from 'react-icons/lu';
import StarRatings from './StarRatings';

const product = {
  product_id: 'P001',
  product_title: 'Apple iPhone 15 Pro Max',
  product_image: 'https://example.com/iphonel5promax.jpg',
  category: 'Phones',
  price: 1299,
  description: 'Experience the ultimate smartphone with the iPhone 15 Pro Max.',
  specification: [
    '6.7-inch Super Retina XDR display',
    'A17 Bionic chip',
    'Triple-camera system (48MP Main, 12MP Telephoto, 12MP Ultra-wide)',
    'LiDAR Scanner',
    'Up to 2TB storage',
  ],
  availability: true,
  rating: 4.8,
};

const ProductDetailsCard = () => {
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  return (
    <section className="max-width-wrapper p-8 bg-white rounded-[1.5rem]">
      <div className="flex flex-col items-center lg:flex-row gap-8">
        <div className="max-w-[26.51931rem] w-full min-h-[31.5rem] bg-slate-500 rounded-2xl">
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
            <button className="max-w-[12rem] w-full py-3 rounded-[2rem] text-white bg-clr-electric-violet">
              Add to Cart
            </button>
            <button className="size-10 rounded-full border border-solid flex items-center justify-center bg-white">
              <LuHeart className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
