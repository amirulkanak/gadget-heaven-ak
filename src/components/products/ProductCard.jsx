const ProductCard = () => {
  return (
    <div className="w-[20.2rem] p-5 bg-white rounded-2xl space-y-3 shadow-lg">
      <div className="w-full h-[11.5rem] overflow-clip rounded-xl bg-slate-500">
        <img className="w-full h-full object-cover" src="" alt="Product" />
      </div>

      <div className="space-y-3 text-center">
        <h3 className="text-clr-woodsmoke text-2xl font-semibold">Name</h3>
        <p className="text-clr-woodsmoke/60 text-xl">Price: $99.99</p>
        <button className="px-4 py-2 text-clr-electric-violet text-lg font-semibold bg-white border border-clr-electric-violet rounded-[2rem]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
