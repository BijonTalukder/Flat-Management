import React from "react";
import { Radio } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import type { FormRadioGroupProps } from "../../types/form.types";

const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
  name,
  label,
  options,
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
          <Radio.Group {...field} disabled={disabled}>
            {options.map(opt => (
              <Radio key={opt.value} value={opt.value}>
                {opt.label}
              </Radio>
            ))}
          </Radio.Group>
        )}
      />
      {error && <small style={{ color: "red" }}>{error}</small>}
    </div>
  );
};

export default FormRadioGroup;
