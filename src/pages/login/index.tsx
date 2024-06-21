import React, { useState } from "react";
import { Logo } from "../../assets/icons";
import { SignInBg } from "../../assets/images";
import styles from "./login.module.scss";
import { useNavigate } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (!emailRegex.test(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    if (e.target.value.length === 0) {
      setPasswordError("Password field is required");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      email.length !== 0 &&
      !emailRegex.test(email) &&
      password.length === 0
    ) {
      setEmailError("Invalid email address");
      setPasswordError("Password field is required");
      return;
    } else if (email.length !== 0 && !emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return;
    } else if (email.length === 0 && password.length === 0) {
      setEmailError("Email field is required");
      setPasswordError("Password field is required");
      return;
    } else if (password.length === 0) {
      setPasswordError("Password field is required");
      return;
    } else if (email.length === 0 && password.length > 0) {
      setEmailError("Email field is required");
      return;
    } else if (
      email.length > 0 &&
      password.length > 0 &&
      emailRegex.test(email)
    ) {
      navigation("/dashboard");
    }
  };

  return (
    <main className={styles.login}>
      <section className={styles.logo_section}>
        <div className="">
          <Logo />
        </div>
        <div>
          <img alt="" srcSet={SignInBg} className={styles.bg} />
        </div>
      </section>
      <section className={styles.form_section}>
        <h1 className={styles.title}>Welcome!</h1>
        <p className={styles.subtitle}>Enter details to login.</p>
        <form onSubmit={handleSubmit} className={`${styles.form}`}>
          <div className={styles.input_group}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className={styles.input}
            />
          </div>
          <p data-testid="email-error" className={styles.error}>
            {emailError}
          </p>
          <div className={styles.input_group1}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className={styles.input}
            />
            <p
              onClick={() => setShowPassword(!showPassword)}
              className={styles.show_hide}
            >
              {showPassword ? "Hide" : "Show"}
            </p>
          </div>
          <p data-testid="password-error" className={styles.error}>
            {passwordError}
          </p>
          <p className={styles.forgot_password}>Forget Password?</p>
          <button type="submit" className={styles.btn}>
            Log in
          </button>
        </form>
      </section>
    </main>
  );
}
