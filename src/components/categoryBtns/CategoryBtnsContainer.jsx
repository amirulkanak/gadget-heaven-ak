import CategoryBtn from './CategoryBtn';

const CategoryBtnsContainer = () => {
  return (
    <section className="p-6 bg-white flex flex-wrap gap-4 items-center justify-center lg:max-w-[15rem] w-full lg:flex-col rounded-lg">
      <CategoryBtn />
      <CategoryBtn />
      <CategoryBtn />
      <CategoryBtn />
      <CategoryBtn />
    </section>
  );
};

export default CategoryBtnsContainer;
