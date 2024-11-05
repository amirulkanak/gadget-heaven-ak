import { TiDeleteOutline } from 'react-icons/ti';

const WishProductCard = ({ product, handleCart, handleRemoveFromWishlist }) => {
  const { product_id, product_title, product_image, price, description } =
    product;

  return (
    <div className="relative p-8 bg-white rounded-2xl flex flex-col gap-4 md:flex-row">
      {/* delete Button */}
      <button
        onClick={() => handleRemoveFromWishlist(product_id)}
        className="absolute right-1 top-1">
        <TiDeleteOutline className="text-4xl text-rose-500" />
      </button>

      <div className="w-[17rem] min-h-[12rem] bg-slate-400 rounded-lg">
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
        <button
          onClick={() => handleCart(product)}
          className="max-w-[10rem] w-full py-3 rounded-[2rem] text-white bg-clr-electric-violet">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default WishProductCard;
