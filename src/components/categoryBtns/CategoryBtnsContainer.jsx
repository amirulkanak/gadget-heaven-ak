import CategoryBtn from './CategoryBtn';

const buttonCategory = [
  'All',
  'Phones',
  'Laptops',
  'Accessories',
  'Smart Watches',
];

const CategoryBtnsContainer = () => {
  const handleClick = (category) => {
    console.log(`You clicked on ${category}`);
  };

  return (
    <section className="p-6 bg-white flex flex-wrap gap-4 items-center justify-center lg:max-w-[15rem] w-full lg:flex-col rounded-lg">
      {buttonCategory.map((category) => (
        <CategoryBtn handleClick={handleClick} key={category}>
          {category}
        </CategoryBtn>
      ))}
    </section>
  );
};

export default CategoryBtnsContainer;
