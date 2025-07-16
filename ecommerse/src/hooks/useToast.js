import { toast } from "react-toastify";

export const useToast = () => {
  const showToast = (type, message, options = {}) => {
    switch (type) {
      case "success":
        toast.success(message, options);
        break;
      case "error":
        toast.error(message, options);
        break;
      case "info":
        toast.info(message, options);
        break;
      case "warning":
        toast.warning(message, options);
        break;
      default:
        toast(message, options);
    }
  };

  return { showToast };
};
