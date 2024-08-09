import React from "react";
import { DevPageStyled } from "./DevPage.styled";
import { Link } from "react-router-dom";

const DevPage: React.FC = () => {
  return (
    <DevPageStyled>
        <Link to={"/Admin"}>/Admin</Link>
        <Link to={"/Cataloque"}>/Cataloque</Link>
        <Link to={"/Home"}>/Home</Link>
        <Link to={"/Movies"}>/Movies</Link>
        <Link to={"/Profile"}>/Profile</Link>
        <Link to={"/SignIn"}>/SignIn</Link>
        <Link to={"/SignUp"}>/SignUp</Link>
    </DevPageStyled>
  );
};

export default DevPage;
