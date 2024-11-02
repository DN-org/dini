//Packages
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import React, { useState } from "react";

//Styles
import {
  PasswordEyeIcon,
  SignInForm,
  SignInFormButton,
  SignInInput,
  SignInPageStyled,
} from "./SignInPage.styled";

const SignInPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <SignInPageStyled>
      <SignInForm>
        <h1>Авторизация</h1>
        <SignInInput
          variant="outlined"
          id="userLogin"
          name="userLogin"
          type="text"
          label="Логин"
        />
        <SignInInput
          variant="outlined"
          id="userPassword"
          name="userPassword"
          type={showPassword ? "text" : "password"}
          label="Пароль"
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
        <SignInFormButton>Войти</SignInFormButton>
      </SignInForm>
    </SignInPageStyled>
  );
};

export default SignInPage;
