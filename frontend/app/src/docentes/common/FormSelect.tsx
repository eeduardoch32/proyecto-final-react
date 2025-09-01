import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormSelectProps {
  label: string;
  registration: UseFormRegisterReturn;
  options: { value: string | number; label: string }[];
  error?: FieldError;
}

export const FormSelect = ({ label, registration, options, error }: FormSelectProps) => {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <select
        className="border rounded p-2 w-full"
        {...registration}
      >
        <option value="">-- Seleccione --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};
