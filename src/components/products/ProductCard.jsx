import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { product_id, product_title, price, product_image } = product;
  return (
    <div className="w-[20.2rem] p-5 bg-white rounded-2xl flex flex-col items-center justify-between gap-3 shadow-lg">
      <div className="w-full h-[11.5rem] overflow-clip rounded-xl bg-slate-500">
        <img
          className="w-full h-full object-cover"
          src={product_image}
          alt={product_title}
        />
      </div>

      <div className="space-y-3 text-center">
        <h3 className="text-clr-woodsmoke text-2xl font-semibold">
          {product_title}
        </h3>
        <p className="text-clr-woodsmoke/60 text-xl">Price: ${price}</p>

        <button>
          <Link
            to={`/product/${product_id}`}
            className="px-4 py-2 text-clr-electric-violet text-lg font-semibold bg-white border border-clr-electric-violet rounded-[2rem]">
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
