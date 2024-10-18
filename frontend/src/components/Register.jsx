import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi
import axios from "axios";
import '../style/Register.css'; // Import file CSS

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); 
  const [successMessage, setSuccessMessage] = useState(""); 
  const navigate = useNavigate(); // Initialize useNavigate untuk redirect

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setErrorMessage("Password harus minimal 8 karakter.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/auth/register", formData);
      setSuccessMessage("Register berhasil!");
      setErrorMessage(""); 

      // Redirect ke halaman login setelah registrasi berhasil
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redirect setelah 2 detik untuk memberi waktu melihat pesan sukses
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message); 
      } else {
        setErrorMessage("Error registering user. Please try again.");
      }
      setSuccessMessage(""); 
    }
  };

  return (
    <div className="b"> {/* Background hitam */}
      <div className="register-container">
        <div className="register-card">
          <h2 className="register-title">Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="register-input"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              className="register-input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="register-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button className="register-button" type="submit">Register</button>
          </form>

          {/* Tampilkan pesan error atau sukses */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          {/* Tautan ke halaman login */}
          <p className="login-link">
            Sudah punya akun? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
