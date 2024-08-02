import { InputAdornment } from "@mui/material";
import { SearchFieldStyled } from "./SearchField.styled";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

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
