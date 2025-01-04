interface FormTextareaProps {
    name: string;
    value: string;
    placeholder: string;
    error?: string;
    onChange: (name: string, value: string) => void;
    onBlur: (name: string) => void;
  }
  
  export const FormTextarea: React.FC<FormTextareaProps> = ({
    name,
    value,
    placeholder,
    error,
    onChange,
    onBlur,
  }) => (
    <div className="flex flex-col">
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        className={`bg-transparent border-b-2 border-dashed text-[#4b4b4b] font-serif outline-none transition-colors duration-300 ${
          error ? "border-red-500" : "border-gray-700"
        } focus:border-gray-700`}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );