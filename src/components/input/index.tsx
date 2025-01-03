import clsx from 'clsx';

interface Input {
  name: string;
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
}

export const Input: React.FC<Input> = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  className,
  inputClassName,
  labelClassName,
}) => {
  const wrapperClass = clsx('flex flex-col font-poppins', className);
  const labelClass = clsx('pb-1 text-white md:text-xl font-poppins', labelClassName);
  const inputClass = clsx(
    'bg-transparent w-full border-b outline-0 border-custom-pink text-white md:text-xl font-poppins',
    inputClassName,
  );

  return (
    <div className={wrapperClass}>
      <label className={labelClass}>{label}</label>
      <input
        name={name}
        className={inputClass}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
