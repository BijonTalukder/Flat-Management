import React from "react";
import { Input } from "antd";
import { useFormContext, Controller, type FieldError } from "react-hook-form";
import type { FormInputProps } from "../../types/form.types";

const FormInput: React.FC<FormInputProps> = ({
  name,
  type = "text",
  size = "large",
//   value,
  id,
  placeholder,
  label,
  required,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name] as FieldError | undefined;

  return (
    <div>
      {label && <label htmlFor={id}>{label} {required && "*"}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password {...field} id={id} size={size} placeholder={placeholder} />
          ) : (
            <Input {...field} id={id} size={size} placeholder={placeholder} />
          )
        }
      />
      {fieldError?.message && <small style={{ color: "red" }}>{fieldError.message}</small>}
    </div>
  );
};

export default FormInput;
