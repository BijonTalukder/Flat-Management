import React from "react";
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import type { FormSelectProps } from "../../types/form.types";

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  options,
  placeholder,
  required,
  disabled,
}) => {
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && <label>{label} {required && "*"}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            placeholder={placeholder}
            disabled={disabled}
            options={options}
            style={{ width: "100%" }}
          />
        )}
      />
      {error && <small style={{ color: "red" }}>{error}</small>}
    </div>
  );
};

export default FormSelect;
