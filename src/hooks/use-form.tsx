import { useState } from "react";

// Define types for validation
type Validator<T> = (name: keyof T, value: string) => string;

export const useForm = <T extends Record<string, string>>(
  initialState: T,
  validate: Validator<T>
) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [errors, setErrors] = useState<Record<keyof T, string>>(
    Object.fromEntries(Object.keys(initialState).map((key) => [key, ""])) as Record<keyof T, string>
  );
  const [touched, setTouched] = useState<Record<keyof T, boolean>>(
    Object.fromEntries(Object.keys(initialState).map((key) => [key, false])) as Record<keyof T, boolean>
  );

  const handleChange = (name: string, value: string, callback?: () => void) => {
    if (name in formData) {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: validate(name as keyof T, value) }));
    }
    if (callback) callback();
  };

  const handleBlur = (name: string, callback?: () => void) => {
    if (name in formData) {
      setTouched((prev) => ({ ...prev, [name]: true }));
      setErrors((prev) => ({ ...prev, [name]: validate(name as keyof T, formData[name as keyof T]) }));
    }
    if (callback) callback();
  };

  const validateForm = (): Record<keyof T, string> => {
    return Object.keys(formData).reduce((acc, key) => {
      const fieldName = key as keyof T;
      acc[fieldName] = validate(fieldName, formData[fieldName]);
      return acc;
    }, {} as Record<keyof T, string>);
  };

  const resetForm = () => {
    setFormData(initialState); // Reset form data to its initial state
    setErrors(
      Object.keys(initialState).reduce((acc, key) => ({ ...acc, [key]: '' }), {} as Record<keyof typeof formData, string>)
    );
  };

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
  };
};