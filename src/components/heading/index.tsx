import clsx from 'clsx';

export const Heading: React.FC<{
  heading: string;
  subheading?: React.ReactNode;
  containerClass?: string;
}> = ({ heading, subheading, containerClass }) => {
  const containerClassname = clsx('w-full mx-auto mb-8', containerClass);

  return (
    <div className={containerClassname}>
      <h1 className="text-center text-6xl text-white font-bold">{heading}</h1>
      {subheading && <div className="my-4 text-white">{subheading}</div>}
    </div>
  );
};
