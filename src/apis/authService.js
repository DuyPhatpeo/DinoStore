import axiosClient from "./axiosClient";

/**
 * Gửi yêu cầu đăng ký người dùng mới
 * @param {Object} body - { email, password }
 */
const register = async (body) => {
  try {
    const res = await axiosClient.post("/register", body);
    return res.data; // Giả định backend trả { email: "...", ... }
  } catch (error) {
    const message =
      error.response?.data?.message || "Registration failed. Please try again.";
    throw new Error(message);
  }
};

/**
 * Gửi yêu cầu đăng nhập
 * @param {Object} body - { email, password }
 */
const login = async (body) => {
  try {
    const res = await axiosClient.post("/login", body);
    return res.data; // Giả định backend trả { token, user }
  } catch (error) {
    const message =
      error.response?.data?.message || "Login failed. Check your credentials.";
    throw new Error(message);
  }
};

export { register, login };
