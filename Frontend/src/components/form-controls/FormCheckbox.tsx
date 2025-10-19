import React from "react";
import { Checkbox } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import type { FormCheckboxProps } from "../../types/form.types";

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  label,
  required,
  disabled,
}) => {
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <div style={{ marginBottom: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox {...field} checked={!!field.value} disabled={disabled}>
            {label} {required && "*"}
          </Checkbox>
        )}
      />
      {error && <small style={{ color: "red" }}>{error}</small>}
    </div>
  );
};

export default FormCheckbox;
