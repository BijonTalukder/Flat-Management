"use client";
import React from "react";

import { Button } from "antd";

import { validation } from "../../utils/validation";
import CustomForm from "../form-controls/FormProvider";
import { FormCheckbox, FormInput } from "../form-controls";
interface LoginFormValues {
    email: string;
    password: string;
    remember: boolean;
}



const LoginForm: React.FC = () => {
    const handleSubmit = (data: LoginFormValues) => {
        console.log(" Login Data:", data);

    };

    return (
        <div
            style={{
                maxWidth: 400,
                margin: "50px auto",
                padding: "30px",
                border: "1px solid #eee",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.05)",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>

            <CustomForm<LoginFormValues>
                submitHandler={handleSubmit}
                defaultValues={{ email: "", password: "", remember: false }}
                schema={validation.LoginSchema}
            >
                <FormInput name="email" label="Email Address" required placeholder="Enter your email" />
                <FormInput
                    name="password"
                    label="Password"
                    type="password"
                    required
                    placeholder="Enter your password"
                />
                <FormCheckbox name="remember" label="Remember Me" />

                <Button type="primary" htmlType="submit" block size="large">
                    Login
                </Button>
            </CustomForm>
        </div>
    );
};

export default LoginForm;
