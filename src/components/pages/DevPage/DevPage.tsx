//Packages
import React from "react";
import { Link } from "react-router-dom";

//Styles
import { DevPageStyled } from "./DevPage.styled";

import StarRating from "../../StarRating/StarRating";

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
        <StarRating fontSize={"70px"} onChange={function (newValue: number | null): void {
        throw new Error("Function not implemented.");
      } }/>
    </DevPageStyled>
  );
};

export default DevPage;
