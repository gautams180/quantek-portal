import { CLIENTS } from '../../constants/header';
import { Heading } from '../heading';
import { GlassCard } from '../glassCard';

export const Clients = () => {
  return (
    <div className="flex flex-col w-full px-8 my-10">
      <Heading heading={'Our Clients'} containerClass='w-8/12 md:!w-6/12 ' />
      <div className="mx-auto w-10/12 md:w-7/12 grid grid-cols-[45%_45%] md:grid-cols-[40%_40%] grid-rows-[140px_140px] md:grid-rows-[280px_280px] gap-y-2 md:gap-y-6 place-content-between">
        {CLIENTS.map((item: any, index: number) => (
          <GlassCard
            key={index}
            notch={false}
            className="!flex !justify-center !items-center"
          >
            <img className="max-w-[85%]" src={item.icon} />
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
