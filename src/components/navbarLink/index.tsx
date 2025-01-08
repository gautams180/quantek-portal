import React from 'react';
import { Link, useNavigate } from 'react-router';
import { scroller } from 'react-scroll';

interface NavbarLinkProps {
  item: HeaderItem;
  activeElementId?: string;
  setActiveElementId: React.Dispatch<React.SetStateAction<string>>;
}

interface HeaderItem {
  label: string;
  link: string;
  id: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  item,
  activeElementId,
  setActiveElementId,
}) => {
  const navigate = useNavigate();

  //to scroll to specific part
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: HeaderItem,
  ) => {
    e.preventDefault();
    navigate(item.link);
    setTimeout(() => {
      scroller.scrollTo(item.id, {
        duration: 1000,
        delay: 50,
        smooth: true,
        offset: -50,
      });
    }, 500);
    setActiveElementId(item.id);
  };

  return (
    <Link
      className={
        activeElementId == item.id
          ? 'text-base border-b-2 border-b-custom-pink cursor-pointer'
          : 'text-base cursor-pointer hover:border-b-2 border-b-custom-pink transition-all duration-200'
      }
      to={item.link}
      onClick={e => handleScroll(e, item)}
    >
      {item.label}
    </Link>
  );
};
