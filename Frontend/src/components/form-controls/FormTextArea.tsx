import React from "react";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import type { FormTextAreaProps } from "../../types/form.types";

const { TextArea } = Input;

const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  label,
  placeholder,
  rows = 4,
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
          <TextArea
            {...field}
            placeholder={placeholder}
            rows={rows}
            disabled={disabled}
          />
        )}
      />
      {error && <small style={{ color: "red" }}>{error}</small>}
    </div>
  );
};

export default FormTextArea;
