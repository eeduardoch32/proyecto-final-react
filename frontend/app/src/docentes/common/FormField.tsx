import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
  label: string;
  registration: UseFormRegisterReturn;
  type?: string;
  placeholder?: string;
  error?: FieldError;
}

export const FormField = ({
  label,
  type = "text",
  placeholder,
  registration,
  error,
}: FormFieldProps) => {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        {...registration}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};
