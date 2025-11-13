import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

export default function AuthPanel() {
  const [mode, setMode] = useState("login");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "login" ? "register" : "login"));
  };

  return (
    <div className="w-full h-full">
      {mode === "login" ? (
        <Login onSwitch={toggleMode} />
      ) : (
        <Register onSwitch={toggleMode} />
      )}
    </div>
  );
}
