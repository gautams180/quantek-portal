import { clsx } from 'clsx';
import styles from './styles.module.css';

interface GlassCardProps {
  icon?: any;
  title?: React.ReactNode;
  description?: React.ReactNode;
  notch?: boolean;
  className?: string;
  glassBgClassName?: string;
  children?: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  icon,
  title,
  description,
  children,
  notch = false,
  className = '',
  glassBgClassName = '',
}) => {
  const glassBg = clsx(
    'bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10',
    glassBgClassName,
  );

  const cardClass = clsx(
    notch === true && styles['glassCard-notch'],
    glassBg,
    'rounded-sm relative flex flex-col px-2 lg:px-4 md:pt-[1rem] md:pb-[1rem] my-4 overflow-hidden',
    className,
  );

  return (
    <div className={cardClass}>
      {children ? (
        children
      ) : (
        <div className="mx-2">
          {icon && (
            <div className="ml-auto my-8  h-20 w-20 lg:h-28 lg:w-28 object-center ">
              <img className="aspect-square object-fit" src={icon} />
            </div>
          )}
          <div className="text-3xl lg:text-3xl xl:text-4xl text-white font-bold my-0 ml-2">
            {title}
          </div>
          <div className="text-sm md:text-sm lg:text-sm xl:text-sm text-white font-poppins my-2 ml-2 leading-relaxed">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};
