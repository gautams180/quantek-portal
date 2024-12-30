import { Heading } from '../heading';
import { GlassCard } from '../glassCard';
import { WORKFLOW_DATA } from '../../constants/header';

export const Workflow = () => {
  return (
    <div className="flex flex-col w-full px-8 my-10">
      <Heading
        heading={'Workflow that just works'}
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
      <div className="mx-auto w-10/12 grid grid-cols-1 grid-rows-auto gap-y-6">
        {WORKFLOW_DATA.map((item: any, index: number) => (
          <div key={index} className="grid grid-cols-[45%_45%] grid-rows-auto place-content-between">
            <Heading heading={item.heading} subheading={item.subheading} />
            <div>
              <img src={item.image} className="w-full h-[450px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
