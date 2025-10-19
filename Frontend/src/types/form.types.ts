import type { ReactNode } from "react";
import type { AnyObjectSchema } from "yup";

import type {

  FieldValues,
  SubmitHandler,
  DefaultValues,
} from "react-hook-form";
export interface BaseFormFieldProps {
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface FormInputProps extends BaseFormFieldProps {
  id?: string;
  type?: string;
  size?: "small" | "middle" | "large";
  placeholder?: string;
  value?: string | number;
}

export interface FormSelectProps extends BaseFormFieldProps {
  options: { label: string; value: string | number }[];
  placeholder?: string;
}

export interface FormRadioGroupProps extends BaseFormFieldProps {
  options: { label: string; value: string | number }[];
}

export interface FormCheckboxProps extends BaseFormFieldProps {
  label: string;
}

export interface FormTextAreaProps extends BaseFormFieldProps {
  placeholder?: string;
  rows?: number;
}
export interface ZFormProps<T extends FieldValues> {
  children: ReactNode;
  submitHandler: SubmitHandler<T>;
  defaultValues?: DefaultValues<T>; 
  schema?: AnyObjectSchema;
}