import { useNavigate } from 'react-router';
import { QuantekIcon } from '../../assets/icons';
import { HEADERS } from '../../constants/header';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoArrowRight } from 'react-icons/go';
import { animateScroll } from 'react-scroll';
import { NavbarLink } from '../navbarLink';

interface HeaderItem {
  label: string;
  link: string;
  id: string;
}

export const Navbar: React.FC = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const [showOption, setShowOption] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);
  const [activeElementId, setActiveElementId] = useState<string>('');
  const navigate = useNavigate();

  //to handle hamburger icon when width of screen changes
  const changeMenu = () => {
    setHamburgerMenu(window.innerWidth < 768);
  };

  window.addEventListener('resize', changeMenu);

  //to handle blur effect of navbar when scrolled
  const changeBackground = () => {
    setNavbar(window.scrollY > window.innerHeight / 5);
  };

  window.addEventListener('scroll', changeBackground);

  useEffect(() => {
    changeMenu();
  }, []);

  const containerClass = clsx(
    'w-full flex py-4 text-white sticky top-0 z-[100]',
    navbar && {
      'bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-10 backdrop-blur-sm transition-all duration-500 ease-in-out':
        true,
    },
  );

  return (
    <header className={containerClass} id="top">
      <div className="w-11/12 mx-auto px-8 flex justify-between items-center">
        <div
          className="flex ml-1 w-2/12 text-2xl"
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              animateScroll.scrollToTop();
            });
          }}
        >
          <QuantekIcon />
        </div>

        {!hamburgerMenu ? (
          <div className="flex gap-20 justify-end w-5/12">
            {HEADERS.map((item: HeaderItem, index: number) => (
              <NavbarLink
                item={item}
                activeElementId={activeElementId}
                setActiveElementId={setActiveElementId}
                key={index}
              />
            ))}
          </div>
        ) : (
          <div className="relative">
            {!showOption ? (
              <button onClick={() => setShowOption(true)}>
                <RxHamburgerMenu />
              </button>
            ) : (
              <div className="absolute top-0 right-0 flex flex-col justify-between bg-[#00021b] w-[181px] h-[233px] px-[13px] pb-10 pt-2 border-[1px] border-gray-400 rounded-sm">
                <button onClick={() => setShowOption(false)}>
                  <GoArrowRight />
                </button>
                <div className="flex flex-col gap-2 items-start w-5/12">
                  {HEADERS.map((item: HeaderItem, index: number) => (
                    <button
                      onClick={() => {
                        setShowOption(false);
                      }}
                    >
                      <NavbarLink
                        item={item}
                        activeElementId={activeElementId}
                        setActiveElementId={setActiveElementId}
                        key={index}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
