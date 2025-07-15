import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-center text-lg font-semibold tracking-widest border-b pb-2 mb-6">
        SIGN IN
      </h2>

      <form className="space-y-4">
        {/* Username or email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Username or email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black text-sm"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border px-3 py-2 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Remember me */}
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="remember" className="w-4 h-4" />
          <label htmlFor="remember" className="text-sm text-gray-700">
            Remember me
          </label>
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-neutral-800 text-white text-sm font-bold py-2 rounded hover:bg-black transition"
        >
          LOGIN
        </button>

        {/* Forgot password */}
        <div className="text-center mt-4">
          <a
            href="#"
            className="text-sm text-gray-600 hover:underline hover:text-black"
          >
            Lost your password?
          </a>
        </div>
      </form>
    </div>
  );
}
