import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("User Registered:", data);
    setSubmitted(true);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2 className="register-title">Register</h2>
        {submitted ? (
          <p className="success-message">Registration successful!</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                {...register("fullName", { required: "Full Name is required" })}
              />
              {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
              />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>

            <button type="submit" className="register-button">Register</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
