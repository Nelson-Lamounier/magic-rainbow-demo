
interface FormInputProps<T> {
    name: keyof T;
    type: string;
    value: string;
    placeholder: string;
    error?: string;
    onChange: (name: keyof T, value: string) => void;
    onBlur: (name: keyof T) => void;
  }
  
  export const FormInput= <T extends Record<string, string>>({
    name,
    type,
    value,
    placeholder,
    error,
    onChange,
    onBlur,
  }: FormInputProps<T>) => (
    <div className="flex flex-col">
      <input
        type={type}
        name={name as string}
        value={value}
        placeholder={placeholder}
        className={`bg-transparent pt-8 border-b-2 border-dashed text-[#4b4b4b] font-serif outline-none transition-colors duration-300 ${
          error ? "border-red-500" : "border-gray-700"
        } focus:border-gray-700`}
        onChange={(e) => onChange(name as keyof T, e.target.value)}
        onBlur={() => onBlur(name as keyof T)}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );