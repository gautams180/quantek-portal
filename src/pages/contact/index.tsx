import { Button } from '../../components/button';
import { GlassCard } from '../../components/glassCard';
import { Input } from '../../components/input';

export const Contact = () => {
  const labelClass = 'my-4';
  const wrapperClass = 'my-4';

  return (
    <div className="flex flex-col w-full px-8 my-10">
      <div className="w-6/12 mx-auto mb-8">
        <h1 className="text-center text-6xl text-white font-bold">
          Contact Us
        </h1>
        <GlassCard className="flex flex-col gap-y-4 !mt-10">
          <div className="flex flex-col px-10">
            <Input
              label="Name"
              placeholder="Your Name"
              labelClassName={labelClass}
              className={wrapperClass}
              onChange={() => {}}
            />
            <Input
              label="Email"
              placeholder="Your Email Id"
              labelClassName={labelClass}
              onChange={() => {}}
            />
            <Input
              label="Question/Comment"
              placeholder="Your question/comment"
              labelClassName={labelClass}
              className={wrapperClass}
              onChange={() => {}}
            />
            <Button text="Send" className="mx-auto !w-[150px] !border-0 my-4" />
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
