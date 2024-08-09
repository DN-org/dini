//Packages
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import React, { useState } from "react";

//Styles
import {
  PasswordEyeIcon,
  SignUpForm,
  SignUpFormButton,
  SignUpInput,
  SignUpPageStyled,
} from "./SignUpPage.styled";

const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [errors, setErrors] = useState({
    userLogin: "",
    userEmail: "",
    userPassword: "",
    userPasswordConfirm: "",
  });

  const validateLogin = (login: string) => {
    if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(login)) {
      return "Логин должен содержать только латинские буквы и не начинаться с цифры.";
    }
    return "";
  };

  const validateEmail = (email: string) => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Введите корректный email.";
    }
    return "";
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Пароль должен быть не менее 8 символов.";
    }
    if (!/[0-9]/.test(password)) {
      return "Пароль должен содержать хотя бы одну цифру.";
    }
    return "";
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleTogglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let error = "";
    switch (name) {
      case "userLogin":
        error = validateLogin(value);
        break;
      case "userEmail":
        error = validateEmail(value);
        break;
      case "userPassword":
        error = validatePassword(value);
        break;
      case "userPasswordConfirm":
        error =
          value !== (e.target.form?.userPassword as HTMLInputElement)?.value
            ? "Пароли не совпадают."
            : "";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const loginError = validateLogin(form.userLogin.value);
    const emailError = validateEmail(form.userEmail.value);
    const passwordError = validatePassword(form.userPassword.value);
    const passwordConfirmError =
      form.userPassword.value !== form.userPasswordConfirm.value
        ? "Пароли не совпадают."
        : "";

    setErrors({
      userLogin: loginError,
      userEmail: emailError,
      userPassword: passwordError,
      userPasswordConfirm: passwordConfirmError,
    });

    if (!loginError && !emailError && !passwordError && !passwordConfirmError) {
      // Процесс регистрации
      console.log("Регистрация успешна");
    }
  };

  return (
    <SignUpPageStyled>
      <SignUpForm onSubmit={handleSubmit}>
        <h1>Регистрация</h1>
        <SignUpInput
          variant="outlined"
          id="userLogin"
          name="userLogin"
          type="text"
          label="Логин"
          onChange={handleInputChange}
          error={!!errors.userLogin}
          helperText={errors.userLogin}
        />
        <SignUpInput
          variant="outlined"
          id="userEmail"
          name="userEmail"
          type="email"
          label="Email"
          onChange={handleInputChange}
          error={!!errors.userEmail}
          helperText={errors.userEmail}
        />
        <SignUpInput
          variant="outlined"
          id="userPassword"
          name="userPassword"
          type={showPassword ? "text" : "password"}
          label="Пароль"
          onChange={handleInputChange}
          error={!!errors.userPassword}
          helperText={errors.userPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PasswordEyeIcon onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </PasswordEyeIcon>
              </InputAdornment>
            ),
          }}
        />
        <SignUpInput
          variant="outlined"
          id="userPasswordConfirm"
          name="userPasswordConfirm"
          type={showPasswordConfirm ? "text" : "password"}
          label="Повтор пароля"
          onChange={handleInputChange}
          error={!!errors.userPasswordConfirm}
          helperText={errors.userPasswordConfirm}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PasswordEyeIcon
                  onClick={handleTogglePasswordConfirmVisibility}
                >
                  {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                </PasswordEyeIcon>
              </InputAdornment>
            ),
          }}
        />
        <SignUpFormButton type="submit">Регистрация</SignUpFormButton>
      </SignUpForm>
    </SignUpPageStyled>
  );
};

export default SignUpPage;
