import { TiDeleteOutline } from 'react-icons/ti';

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

const CartProduct = () => {
  const { product_id, product_title, product_image, price, description } =
    product;

  return (
    <div className="relative p-8 bg-white rounded-2xl flex flex-col gap-4 md:flex-row">
      {/* delete Button */}
      <button className="absolute right-1 top-1">
        <TiDeleteOutline className="text-4xl text-rose-500" />
      </button>

      <div className="w-[12.5rem] min-h-[7.75rem] bg-slate-400 rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={product_image}
          alt={product_title}
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-clr-woodsmoke text-[1.5rem] font-semibold">
          {product_title}
        </h3>

        <p className="text-lg font-semibold text-clr-woodsmoke/80">
          Description:{' '}
          <span className="text-clr-woodsmoke/60">{description}</span>
        </p>

        <p className="text-xl text-clr-woodsmoke/80 font-semibold">
          Price: ${price}
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
