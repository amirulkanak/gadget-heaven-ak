import HeroBG from '../assets/images/hero-banner.png';

const Header = () => {
  return (
    <header className="max-width-wrapper">
      <div className="p-6 max-w-[69.375rem] w-full max-h-[38.1875rem] border-[3px] border-solid border-rose-600 rounded-[2rem]">
        <img
          className="h-full w-full object-cover rounded-[2rem]"
          src={HeroBG}
          alt="VR"
        />
      </div>
    </header>
  );
};

export default Header;
