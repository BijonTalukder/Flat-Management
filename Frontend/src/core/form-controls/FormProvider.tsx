
import { useEffect } from "react";

import { FormProvider, useForm } from "react-hook-form";
import type {
    UseFormReturn,
    FieldValues,

} from "react-hook-form";
import { Form as AntdForm } from "antd";
import type { ZFormProps } from "../../types/form.types";
import { yupResolver } from "@hookform/resolvers/yup";



const CustomForm = <T extends FieldValues>({
    children,
    submitHandler,
    defaultValues,
    schema
}: ZFormProps<T>) => {
    const methods: UseFormReturn<T> = useForm<T>({
        defaultValues,
        resolver: schema ? yupResolver(schema) : undefined,
    });

    const { handleSubmit, reset } = methods;

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    return (
        <FormProvider {...methods}>
            <AntdForm onFinish={handleSubmit(submitHandler)}>
                {children}
            </AntdForm>
        </FormProvider>
    );
};

export default CustomForm;
