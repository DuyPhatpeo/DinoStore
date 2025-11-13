import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useToast } from "@hooks/useToast";
import { login } from "@apis/authService";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .email("Please enter a valid email address")
    .required("Username or Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const { showToast } = useToast();

  return (
    <div className="w-full h-full px-6 pt-6 text-[13px] font-mono text-gray-800">
      <div className="text-center border-b pb-2 mb-6">
        <h2 className="text-base font-semibold tracking-widest uppercase">
          Sign In
        </h2>
      </div>

      <Formik
        initialValues={{ username: "", password: "", remember: false }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const res = await login({
              email: values.username,
              password: values.password,
            });

            // Gợi ý: lưu token nếu login thành công
            if (values.remember) {
              localStorage.setItem("token", res.token);
            } else {
              sessionStorage.setItem("token", res.token);
            }

            showToast(
              "success",
              `Welcome back, ${res.user?.email || values.username}! 🎉`
            );
            resetForm();
            // 👉 Có thể redirect user ở đây nếu muốn
          } catch (err) {
            showToast("error", err.message);
          }
        }}
      >
        {() => (
          <Form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block mb-1">
                Username or Email <span className="text-red-500">*</span>
              </label>
              <Field
                name="username"
                type="text"
                className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="username"
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
                  placeholder="Enter your password"
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

            {/* Remember me */}
            <div className="flex items-center space-x-2">
              <Field
                type="checkbox"
                name="remember"
                id="remember"
                className="w-4 h-4"
              />
              <label htmlFor="remember">Remember me</label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-neutral-800 hover:bg-black text-white text-[12px] tracking-wider uppercase py-2 rounded-sm transition"
            >
              Login
            </button>

            {/* Switch */}
            <div className="text-center mt-4 space-y-2">
              <a
                href="#"
                className="block text-gray-600 hover:text-black hover:underline"
              >
                Forgot your password?
              </a>
              <button
                type="button"
                onClick={onSwitch}
                className="text-gray-600 hover:text-black hover:underline text-sm"
              >
                Don't have an account? Sign up
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
