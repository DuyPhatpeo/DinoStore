import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full px-6 pt-6 text-[13px] font-mono text-gray-800">
      {/* Header */}
      <div className="text-center border-b pb-2 mb-6">
        <h2 className="text-base font-semibold tracking-widest uppercase">
          Sign In
        </h2>
      </div>

      {/* Form */}
      <form className="space-y-4">
        {/* Username or Email */}
        <div>
          <label className="block mb-1">
            Username or email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 border rounded pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Remember me */}
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="remember" className="w-4 h-4" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-neutral-800 hover:bg-black text-white text-[12px] tracking-wider uppercase py-2 rounded-sm transition"
        >
          Login
        </button>

        {/* Forgot password */}
        <div className="text-center mt-4">
          <a
            href="#"
            className="text-gray-600 hover:text-black hover:underline"
          >
            Lost your password?
          </a>
        </div>
      </form>
    </div>
  );
}
