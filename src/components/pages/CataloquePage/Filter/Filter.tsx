//Packages
import React from "react";

//Components
import {FilterСontent,FilterContainer,FilterName} from './Filter.styled'

const Filter: React.FC = () => {
  return (
    <FilterСontent>
      <FilterContainer>
        <FilterName>
          Фильтры
        </FilterName>
      </FilterContainer>
    </FilterСontent>
  );
};

export default Filter;
