import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../assets/icons';

export const Footer = () => {
  return (
    <footer className="mb-auto bg-[#00021B] grid grid-cols-3 grid-rows-1 text-white py-6 h-[180px]">
      <div className="flex flex-col justify-between items-center gap-y-4">
        <div className="text-semibold text-gray-500">Company</div>
        <div className="font-light">About Us</div>
        <div className="font-light">Blog</div>
      </div>
      <div className="flex flex-col justify-between items-center gap-y-4">
        <div className="text-semibold text-gray-500">Help</div>
        <div className="font-light">Support</div>
        <div className="font-light">FAQ</div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <div className="text-semibold text-gray-500">Social</div>
        <div className="flex gap-x-6 place-items-baseline mt-4">
          <div>
            <FacebookIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
          <div>
            <TwitterIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};
