import { Link } from 'react-router-dom';
import Banner from './Banner';

const Header = () => {
  return (
    <>
      <header className="max-w-[96.5rem] w-full mx-auto px-2">
        <div className="bg-clr-electric-violet rounded-b-[2rem] pt-6 pb-[10rem] lg:pb-[16.75rem]">
          <section className="max-width-wrapper flex flex-col items-center gap-6">
            <h1 className="max-w-[70rem] text-white text-[2.5rem] leading-normal lg:text-[3.5rem] lg:leading-[4.5rem] font-bold text-center">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="max-w-[49.75rem] text-white text-base text-center text-pretty">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>

            {/* Action button navigate to the Dashboard page */}
            <Link
              to={'/dashboard/cart'}
              className="mt-2 px-[1.88rem] py-[0.94rem] text-clr-electric-violet bg-white text-xl font-bold rounded-[2rem]">
              Shop Now
            </Link>
          </section>
        </div>
      </header>

      {/* Banner */}
      <Banner />
    </>
  );
};

export default Header;
