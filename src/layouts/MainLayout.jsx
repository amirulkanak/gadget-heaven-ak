import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalStateProvider from '../context/GlobalStateContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <GlobalStateProvider>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />
        {/* Dynamic children component from router */}
        <Outlet />

        {/* Footer */}
        <Footer />
        <ToastContainer />
      </div>
    </GlobalStateProvider>
  );
};

export default MainLayout;
