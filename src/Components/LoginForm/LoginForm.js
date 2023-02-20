import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "../../Assets/Images/login.png";

import "./LoginForm.css";

function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="LoginForm-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={Login} className="LoginLogo" alt="" />
        <h1 className="formH1">Hello!</h1>
        <p className="formPara">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          <label htmlFor="email"></label>
          <input
            placeholder="Enter Your Email"
            type="email"
            ref={register}
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p role="alert">{errors.email?.message}</p>}
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            placeholder="Enter Your Password"
            type="password"
            ref={register}
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}
        </div>
        <div className="remember-recoverContainer">
          <div className="rememberContainer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className="recovery">
            <NavLink to="/recoveryPassword" eventKey="/recoveryPassword">
              Recovery Password
            </NavLink>
          </div>
        </div>
        <input
          type="submit"
          value="Log In"
          className={isValid ? "valid" : "invalid"}
        />
      </form>
    </div>
  );
}

export default LoginForm;
