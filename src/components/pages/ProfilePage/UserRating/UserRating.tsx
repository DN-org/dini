import React, { useState } from "react";

import {
  ButtonContainer,
  SortContainer,
  SortFilter,
  UserRatingContainer,
} from "./UserRating.styled";

import CustomButton from "../../../CustomButton/CustomButton";
import CategoryTab from "../CategoryTab/CategoryTab";

const UserRating: React.FC = () => {

  return (
    <UserRatingContainer>
      <SortContainer>
        <h2>Ваши оценки</h2>
        <SortFilter>
          <ButtonContainer>
            <CustomButton>
              <h4> По дате </h4>
            </CustomButton>
          </ButtonContainer>
        </SortFilter>
        <CategoryTab/>
      </SortContainer>

    </UserRatingContainer>
  );
};

export default UserRating;
