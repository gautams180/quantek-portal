import clsx from "clsx";

export const Heading: React.FC<{
  heading: string;
  subheading?: React.ReactNode;
  containerClass?: string;
  headingClass?: string;
}> = ({ heading, subheading, containerClass, headingClass }) => {
  const containerClassname = clsx(
    "w-full mx-auto mb-8 text-center",
    containerClass
  );
  const headingClassname = clsx(
    "text-4xl lg:text-7xl text-white font-bold",
    headingClass
  );

  return (
    <div className={containerClassname}>
      <h1 className={headingClassname}>{heading}</h1>
      {subheading && (
        <div className="my-4 text-white font-poppins !font-normal text-base md:text-sm">
          {subheading}
        </div>
      )}
    </div>
  );
};
