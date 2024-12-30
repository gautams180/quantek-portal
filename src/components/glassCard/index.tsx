import { clsx } from 'clsx';
import styles from './styles.module.css';

interface GlassCardProps {
  icon?: any;
  title?: React.ReactNode;
  description?: React.ReactNode;
  notch?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  icon,
  title,
  description,
  children,
  notch = false,
  className = '',
}) => {
  const glassBg =
    'bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10';

  const cardClass = clsx(
    notch === true && styles['glassCard-notch'],
    glassBg,
    'my-4 rounded-sm relative flex flex-col px-8 py-8 overflow-hidden',
    className,
  );

  return (
    <div className={cardClass}>
      {children ? (
        children
      ) : (
        <>
          {icon && <div className="ml-auto my-4">{icon()}</div>}
          <div className="text-4xl text-white font-bold my-4 ml-2">{title}</div>
          <div className="text-base text-white my-4 ml-2">{description}</div>
        </>
      )}
    </div>
  );
};
