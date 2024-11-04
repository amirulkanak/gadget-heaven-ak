import HeroBG from '../assets/images/hero-banner.png';

const Banner = () => {
  return (
    <section className="max-width-wrapper -mt-[8rem] lg:-mt-[13.5rem]">
      <div className="p-3 lg:p-6 mx-auto max-w-[69.375rem] w-full max-h-[38.1875rem] border-[3px] border-solid border-white bg-white/30 rounded-[2rem]">
        <img
          className="h-full w-full object-cover rounded-[2rem]"
          src={HeroBG}
          alt="VR"
        />
      </div>
    </section>
  );
};

export default Banner;
