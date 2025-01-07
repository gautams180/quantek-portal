import { CARDS_DATA } from '../../constants/header';
import { GlassCard } from '../glassCard';
import { Heading } from '../heading';

export const ServiceSection = () => {
  return (
    <div className="flex flex-col w-full px-8 my-10" id="services">
      <Heading
        heading={'Our Service'}
        containerClass="!w-11/12 md:!w-6/12 mt-20 md:mt-12 flex flex-col items-center"
        subheading={
          <>
            From IT strategy consulting and comprehensive technology roadmaps to
            the end-to-end development of scalable solutions, Quantek delivers a
            full-cycle software development services that adapt seamlessly to
            your project requirements and business needs.
          </>
        }
      />
      <div className="mx-auto w-11/12 max-w-[20rem] md:w-10/12 md:max-w-max grid md:grid-cols-[28%_28%_28%] md:grid-rows-auto gap-y-12 place-content-between">
        {CARDS_DATA.map((item: any, index: number) => (
          <GlassCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            notch={true}
            className="min-h-[30rem]"
          />
        ))}
      </div>
    </div>
  );
};
