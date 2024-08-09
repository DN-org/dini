//Packages
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { InputAdornment } from "@mui/material";

//Styles
import { SearchFieldStyled } from "./SearchField.styled";

const SearchField: React.FC = () => {
  return (
    <SearchFieldStyled
      variant="outlined"
      placeholder="Поиск..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchRoundedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
