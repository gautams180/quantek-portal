import { Heading } from '../heading';
import { WORKFLOW_DATA } from '../../constants/header';
import Devops from '../../assets/png/dev-ops.png';

export const Workflow = () => {
  return (
    <div className="flex flex-col gap-12 w-full px-8 py-20 my-10" id="work">
      <Heading
        heading={'Workflow that just works'}
        containerClass="!w-11/12 md:!w-10/12 lg:!w-9/12 text-center md:text-start"
        headingClass="lg:!text-7xl text-center"
        subheading={
          <>
            At Quantek, we bridge IT strategy with execution, delivering
            end-to-end solutions tailored to your unique needs. From strategy to
            deployment, our streamlined process ensures your ideas flow
            seamlessly into innovative, scalable results.
          </>
        }
      />
      <div className="mx-auto w-11/12 md:w-10/12 grid grid-cols-1 grid-rows-auto gap-y-52">
        {WORKFLOW_DATA.map((item: any, index: number) => (
          <div
            key={index}
            className="grid md:grid-cols-[45%_45%] grid-rows-auto place-content-between"
          >
            <Heading
              heading={item.heading}
              containerClass=" text-center md:text-start"
              headingClass="md:!text-5xl"
              subheading={
                <div className="flex flex-col gap-y-2 mt-8">
                  <h2 className="text-2xl font-semibold">
                    {item.subheading.title}
                  </h2>
                  <p>{item.subheading.description}</p>
                </div>
              }
            />
            <div className="w-full">
              <img
                src={item.image}
                className={
                  item.image === Devops
                    ? 'w-full mx-auto my-auto'
                    : 'w-full px-6 md:px-16 mx-auto my-auto'
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
