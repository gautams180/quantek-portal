import { CLIENTS } from '../../constants/header';
import { Heading } from '../heading';
import { GlassCard } from '../glassCard';
import clsx from 'clsx';

export const Clients = () => {
  return (
    <div className="flex flex-col w-full px-8 my-10">
      <Heading heading={'Our Clients'} containerClass="w-8/12 md:!w-6/12 " />
      <div
        className={clsx(
          'mx-auto w-10/12 md:w-7/12 ',
          'grid grid-cols-[45%_45%] grid-rows-[140px_140px] gap-y-2 place-content-between',
          'md:grid-cols-[40%_40%] md:grid-rows-[280px_280px] md:gap-y-6',
        )}
      >
        {CLIENTS.map((item: any, index: number) => (
          <GlassCard
            key={index}
            notch={false}
            icon={item.icon}
            className="!flex !justify-center !items-center"
            iconClass="md:!w-52"
          />
        ))}
      </div>
    </div>
  );
};
