import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import StatisticsPage from '../pages/StatisticsPage';
import DashboardPage from '../pages/DashboardPage';
import UserPage from '../pages/UserPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartContainer from '../components/cart/CartContainer';
import WishlistContainer from '../components/wishlist/WishlistContainer';
import ProductCardsContainer from '../components/products/ProductCardsContainer';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: '/',
            element: <ProductCardsContainer />,
          },
          {
            path: '/:category',
            element: <ProductCardsContainer />,
          },
        ],
      },
      {
        path: 'statistics',
        element: <StatisticsPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
        children: [
          {
            path: 'cart',
            element: <CartContainer />,
          },
          {
            path: 'wishlist',
            element: <WishlistContainer />,
          },
        ],
      },
      {
        path: 'user',
        element: <UserPage />,
      },
      {
        path: 'product/:product_id',
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default routes;
