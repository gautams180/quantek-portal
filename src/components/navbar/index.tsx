import { Link,useLocation, useNavigate } from 'react-router';
import { QuantekIcon } from '../../assets/icons';
import { HEADERS } from '../../constants/header';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { RxHamburgerMenu } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";
import  {animateScroll, scroller}  from 'react-scroll'
 



interface HeaderItem {
  label: string;
  link: string;
  id: string;
}

export const Navbar: React.FC = () => {

  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const [showOption, setShowOption] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);
  const [activeElementId, setActiveElementId] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  //to handle hamburger icon when width of screen changes
  const changeMenu = () => {
    if(window.innerWidth < 768) {
      setHamburgerMenu(true);
    }
    else{
      setHamburgerMenu(false)
    }

  }

  window.addEventListener('resize',changeMenu)

  //to handle blur effect of navbar when scrolled
  const changeBackground = () => {
   if(window.scrollY > (window.innerHeight)/5){
    setNavbar(true);
   }
   else {
    setNavbar(false);
   }
  }

  window.addEventListener('scroll', changeBackground )

  useEffect(() => {
    changeMenu();
  },[])

  const containerClass = clsx(
    'w-full flex py-4 text-white sticky top-0 z-[100]',
    navbar &&  {'bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-10 backdrop-blur-sm transition-all duration-500':true}
  )


  return (
    <header className={containerClass} id='top' >
      <div className="w-11/12 mx-auto px-8 flex justify-between items-center" >
        <div className="flex ml-1 w-2/12 text-2xl" 
          onClick={() => {
            navigate("/")
            setTimeout(() => {
              animateScroll.scrollToTop();
            });
          }}
        >
          <QuantekIcon />
        </div>
        
        {
          !hamburgerMenu ? (
            <div className="flex gap-20 justify-end w-5/12">
              {HEADERS.map((item: HeaderItem, index: number) => (
                <Link
                  className={activeElementId == item.id ? ("text-base border-b-2 border-b-[#D70F98] cursor-pointer") : "text-base cursor-pointer hover:border-b-2 border-b-[#D70F98] transition-all duration-200"}
                  key={index}
                  to={item.link}

                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.link)
                    setTimeout(() => {
                      scroller.scrollTo(item.id,{
                        duration: 1000,
                        delay: 50,
                        smooth: true,
                        offset: -50,
                      })
                    },500);
                    setActiveElementId(item.id);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : (
            <div className='relative'>
              {
                !showOption ? (
                  <button onClick={() => setShowOption(true)}>
                    <RxHamburgerMenu />
                  </button> 
                ) : (
                    <div className='absolute top-0 right-0 flex flex-col justify-between bg-[#00021b] w-[181px] h-[233px] px-[13px] pb-10 pt-2     border-[1px] border-gray-400 rounded-sm'>
                        <button onClick={() => setShowOption(false)}>
                          <GoArrowRight />
                        </button>
                        <div className="flex flex-col gap-2 items-start w-5/12">
                          {HEADERS.map((item: HeaderItem, index: number) => (
                            <button onClick={() => {setShowOption(false)}}>
                              <Link
                                className={item.link === location.pathname ? ("text-base border-b-2 border-b-[#D70F98] cursor-pointer") : "text-base cursor-pointer hover:border-b-2 border-b-[#D70F98] transition-all duration-200"}
                                key={index}
                                to={item.link}
                                onClick={() => {
                                  setTimeout(() => {
                                    scroller.scrollTo(item.id,{
                                      duration: 1000,
                                      delay: 50,
                                      smooth: true,
                                      offset: -50,
                                    })
                                  },500)
                                }}
                              >
                                {item.label}
                              </Link>
                            </button>
                          ))}
                        </div>
                    </div>
                )
              }

            </div>
          )
        }
      </div>
    </header>
  );
};
