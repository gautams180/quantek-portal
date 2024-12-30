import clsx from 'clsx';

interface IInput {
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
}

export const Input: React.FC<IInput> = ({
  label,
  value,
  onChange,
  placeholder,
  className,
  inputClassName,
  labelClassName,
}) => {
  const wrapperClass = clsx('flex flex-col', className);
  const labelClass = clsx('px-3 py-1 text-white text-xl', labelClassName);
  const inputClass = clsx(
    'bg-transparent w-full border-b outline-0 border-custom-pink px-3 py-3 text-white',
    inputClassName,
  );

  return (
    <div className={wrapperClass}>
      <h1 className={labelClass}>{label}</h1>
      <input
        className={inputClass}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
