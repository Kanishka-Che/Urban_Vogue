import React, { useState } from "react";
import { useForm } from "react-hook-form"; 
import "./Register.css"

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("User Registered:", data);
    setSubmitted(true);
  };

  return (
    <div className="R-01">
      <div className="R-02">
        <h2 className="R-03">Register</h2>
        {submitted ? (
          <p className="R-04">Registration successful!</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="R-05">Full Name</label>
              <input 
                type="text" 
                {...register("fullName", { required: "Full Name is required" })} 
                className="R06" 
              />
              {errors.fullName && <p className="R-07">{errors.fullName.message}</p>}
            </div>

            <div>
              <label className="R-08">Email</label>
              <input 
                type="email" 
                {...register("email", { required: "Email is required" })} 
                className="R-09" 
              />
              {errors.email && <p className="R-10">{errors.email.message}</p>}
            </div>

            <div>
              <label className="R-11">Password</label>
              <input 
                type="password" 
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} 
                className="R-12" 
              />
              {errors.password && <p className="R-13">{errors.password.message}</p>}
            </div>

            <button type="submit" className="R-14">Register</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
