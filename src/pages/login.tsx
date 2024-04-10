import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Gửi yêu cầu đăng nhập đến JSON Server
      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const data = await response.json();

      if (data.length > 0) {
        // Nếu thông tin đăng nhập chính xác, chuyển hướng đến trang admin
        navigate("/admin");
      } else {
        // Nếu thông tin đăng nhập không chính xác, hiển thị thông báo lỗi
        setError("Email hoặc mật khẩu không chính xác.");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      setError("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Login;
