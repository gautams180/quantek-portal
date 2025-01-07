import { clsx } from 'clsx';
import styles from './styles.module.css';

interface GlassCardProps {
  icon?: any;
  title?: React.ReactNode;
  description?: React.ReactNode;
  notch?: boolean;
  className?: string;
  glassBgClassName?: string;
  iconClass?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  icon,
  title,
  description,
  notch = false,
  className = '',
  glassBgClassName = '',
  iconClass = '',
}) => {

  const cardClass = clsx(
    notch === true && styles['glassCard-notch'],
    'bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10',
    glassBgClassName,
    'rounded-sm relative flex flex-col px-2 lg:px-4 md:py-[1rem] my-4 overflow-hidden',
    className,
  );

  return (
    <div className={cardClass}>
      <div className="mx-2">
        {icon && (
          <div
            className={clsx(
              'ml-auto my-8 w-20 lg:w-28 object-center',
              iconClass,
            )}
          >
            <img className="" src={icon} />
          </div>
        )}
        <div className="text-3xl xl:text-4xl text-white font-bold my-0 ml-2">
          {title}
        </div>
        <div className="text-sm text-white font-poppins my-2 ml-2 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
