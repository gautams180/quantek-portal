import { CARDS_DATA } from '../../constants/header';
import { GlassCard } from '../glassCard';
import { Heading } from '../heading';

export const ServiceSection = () => {
  return (
    <div className="flex flex-col w-full px-8 my-10">
      <Heading
        heading={'Our Service'}
        containerClass="!w-6/12"
        subheading={
          <>
            From IT strategy consulting and comprehensive technology roadmaps to
            the end-to-end development of scalable solutions, Quantek delivers a
            full-cycle software development services that adapt seamlessly to
            your project requirements and business needs.
          </>
        }
      />
      <div className="mx-auto w-10/12 grid grid-cols-[27%_27%_27%] grid-rows-auto gap-y-6 place-content-between">
        {CARDS_DATA.map((item: any, index: number) => (
          <GlassCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            notch={true}
          />
        ))}
      </div>
    </div>
  );
};
