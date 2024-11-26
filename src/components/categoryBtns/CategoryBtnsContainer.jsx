import { useLocation, useParams } from 'react-router-dom';
import useGlobalState from '../../hooks/useGlobalState';
import CategoryBtn from './CategoryBtn';
import { useEffect } from 'react';

const buttonCategory = [
  'All',
  'Phones',
  'Laptops',
  'Accessories',
  'Smart Watches',
];

const CategoryBtnsContainer = () => {
  const { allProducts, setCategoryProducts } = useGlobalState();
  const { pathname } = useLocation();
  const urlCategory = useParams();

  // filter products by category
  const handleCategoryBtnClick = (category) => {
    if (category === 'All') {
      setCategoryProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter(
        (product) => product.category === category
      );
      setCategoryProducts(filteredProducts);
    }
  };

  // filter by category on page load
  useEffect(() => {
    if (pathname === '/') {
      return;
    }
    if (allProducts.length > 0) {
      handleCategoryBtnClick(urlCategory.category);
    }
  }, [urlCategory.category, allProducts]);

  return (
    <section className="p-6 bg-white flex flex-wrap gap-4 items-center justify-center lg:max-w-[15rem] w-full lg:flex-col rounded-lg">
      {buttonCategory.map((category) => (
        <CategoryBtn
          handleCategoryBtnClick={handleCategoryBtnClick}
          key={category}>
          {category}
        </CategoryBtn>
      ))}
    </section>
  );
};

export default CategoryBtnsContainer;
