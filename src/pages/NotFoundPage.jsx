import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="max-width-wrapper w-full min-h-screen flex flex-col items-center justify-center space-y-5">
      <h1 className="text-clr-electric-violet text-6xl font-bold">404</h1>
      <h2 className="text-clr-electric-violet text-3xl font-bold">
        Page Not Found
      </h2>
      <Link
        to={'/'}
        className="px-6 py-3 rounded-[1.5rem] bg-clr-electric-violet text-xl text-white font-bold">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
