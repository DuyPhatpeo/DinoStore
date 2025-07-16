import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useToast } from "@hooks/useToast";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function Register({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const { showToast } = useToast();

  return (
    <div className="w-full h-full px-6 pt-6 text-[13px] font-mono text-gray-800">
      <div className="text-center border-b pb-2 mb-6">
        <h2 className="text-base font-semibold tracking-widest uppercase">
          Sign Up
        </h2>
      </div>

      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { resetForm }) => {
          showToast("success", `Welcome aboard, ${values.email}! 🎉`);
          resetForm();
        }}
      >
        {() => (
          <Form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <Field
                name="email"
                type="email"
                className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border rounded pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  tabIndex={-1}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <Field
                name="confirmPassword"
                type="password"
                className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Re-enter password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-neutral-800 hover:bg-black text-white text-[12px] tracking-wider uppercase py-2 rounded-sm transition"
            >
              Register
            </button>

            {/* Switch to Login */}
            <div className="text-center mt-4 space-y-2">
              <button
                type="button"
                onClick={onSwitch}
                className="text-gray-600 hover:text-black hover:underline text-sm"
              >
                Already have an account? Sign in
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
