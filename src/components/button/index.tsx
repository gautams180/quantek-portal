import clsx from 'clsx';

interface ButtonBaseProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'primary';
  className?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  transparent?: boolean;
  rounded?: boolean;
}

type ButtonProps =
  | (ButtonBaseProps & { children: React.ReactNode; text?: never })
  | (ButtonBaseProps & { text: string; children?: never });

const variantStyles = {
  default:
    'border border-gray-200 enabled:hover:border-gray-400 text-black hover:text-gray-800',
  primary:
    'border-transparent bg-indigo-500 text-white focus:outline-none hover:bg-indigo-600',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  text = 'Button',
  disabled = false,
  type = 'button',
  variant = 'default',
  className,
  rightIcon,
  leftIcon,
  transparent = false,
  rounded = true,
}) => {
  const baseStyles = clsx(
    variantStyles[variant],
    { 'rounded-md': rounded && variant === 'primary' },
    { 'rounded-lg': rounded && variant === 'default' },
    { '!bg-transparent !border-0': transparent },
    'w-max bg-custom-pink text-white px-3 py-3 text-gray-600 text-base font-light disabled:cursor-not-allowed',
    'flex items-center justify-center',
    className,
  );

  return (
    <button
      className={baseStyles}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <div className="flex gap-x-1 items-center">
        {leftIcon && <div>{leftIcon}</div>}
        {children ? children : text}
        {rightIcon && <div>{rightIcon}</div>}
      </div>
    </button>
  );
};
