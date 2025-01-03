import { LinkedinIcon } from '../../assets/icons';

export const Footer = () => {
  return (
    <footer className="w-10/12 mx-auto mb-auto bg-[#00021B] text-white text-xs md:text-base py-6 h-[180px]">
      {/* <div className="flex flex-col justify-between items-center gap-y-4">
        <div className="text-semibold text-gray-500">Company</div>
        <div className="font-poppins">About Us</div>
        <div className="font-poppins">Blog</div>
      </div>
      <div className="flex flex-col justify-between items-center gap-y-4">
        <div className="text-semibold text-gray-500">Help</div>
        <div className="font-poppins">Support</div>
        <div className="font-poppins">FAQ</div>
      </div> */}
      <div className="w-full mx-auto flex flex-col items-center gap-y-4">
        <div className="text-semibold text-gray-500">Social</div>
        <div className="flex gap-x-2 md:gap-x-6 place-items-baseline mt-4">
          {/* <div>
            <FacebookIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
          <div>
            <TwitterIcon />
          </div> */}
          <div>
            <a href='https://quantek.solutions' target='blank'>
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
