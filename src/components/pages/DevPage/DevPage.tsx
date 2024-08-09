//Packages
import React from "react";
import { Link } from "react-router-dom";

//Styles
import { DevPageStyled } from "./DevPage.styled";


const DevPage: React.FC = () => {
  return (
    <DevPageStyled>
        <Link to={"/Admin"}>/Admin</Link>
        <Link to={"/Cataloque"}>/Cataloque</Link>
        <Link to={"/Actor"}>/Actor</Link>
        <Link to={"/Home"}>/Home</Link>
        <Link to={"/Media"}>/Media</Link>
        <Link to={"/Profile"}>/Profile</Link>
        <Link to={"/SignIn"}>/SignIn</Link>
        <Link to={"/SignUp"}>/SignUp</Link>
    </DevPageStyled>
  );
};

export default DevPage;
