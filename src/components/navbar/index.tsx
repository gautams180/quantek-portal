import { Link } from 'react-router';
import { QuantekIcon } from '../../assets/icons';
import { HEADERS } from '../../constants/header';

interface HeaderItem {
  label: string;
  link: string;
}

export const Navbar: React.FC = () => {
  return (
    <header className="w-full flex py-4 px-12 text-white bg-white/10  backdrop-blur-lg sticky top-0 z-[100] ">
      <div className="w-full flex justify-between items-center">
        <div className="flex ml-1 w-2/12 text-2xl">
          <QuantekIcon />
        </div>
        <div className="flex justify-between w-5/12">
          {HEADERS.map((item: HeaderItem, index: number) => (
            <Link
              className="text-base border-b-2 border-b-[#D70F98] cursor-pointer"
              key={index}
              to={item.link}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
