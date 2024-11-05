const Footer = () => {
  return (
    <footer className="mt-auto bg-white">
      <section className="max-width-wrapper pt-[6.25rem] pb-8 flex flex-col items-center">
        <div className="space-y-3 pb-8 border-b mb-8 w-full text-center">
          <h2 className="text-clr-woodsmoke text-[2rem] leading-[2.5rem] font-bold">
            Gadget Heaven
          </h2>
          <p className="text-clr-woodsmoke/60 text-base font-medium">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>

        <div className="max-w-[45rem] w-full flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-clr-woodsmoke text-lg font-bold">Services</h3>
            <ul className="text-clr-woodsmoke/60 text-base space-y-3 mt-4 text-center">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-clr-woodsmoke text-lg font-bold">Company</h3>
            <ul className="text-clr-woodsmoke/60 text-base space-y-3 mt-4 text-center">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-clr-woodsmoke text-lg font-bold">Legal</h3>
            <ul className="text-clr-woodsmoke/60 text-base space-y-3 mt-4 text-center">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>

        {/* terms and copyright */}
        <div className="text-center mt-8 text-clr-woodsmoke/60 text-base pt-8 border-t w-full">
          <p>
            &copy; {new Date().getFullYear()} Gadget Heaven. All rights
            reserved.
          </p>
          <p>Designed by Programming-Hero.com and developed by Amirul Kanak</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
