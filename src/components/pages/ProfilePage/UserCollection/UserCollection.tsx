import React from "react";
import {
  UserContainer,
  UserTab,
  UserTabList,
  UserTabPanel,
  UserChildContainer,
  UserSortButton,
} from "./UserCollection.styled";
import { TabContext } from "@mui/lab";
import MediaCard from "./MediaCard/MediaCard";

const UserCollection: React.FC = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderMediaCards = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <MediaCard key={index} />
    ));
  };

  return (
    <UserContainer>
      <UserChildContainer>
        <h2>Мои оценки</h2>
        <UserSortButton>Сортировка</UserSortButton>
      </UserChildContainer>
      
        <TabContext value={value}>
          <UserTabList onChange={handleChange}>
            <UserTab label="Фильмы" value="1" />
            <UserTab label="Сериалы" value="2" />
            <UserTab label="Мультфильмы" value="3" />
            <UserTab label="Мультсериалы" value="4" />
            <UserTab label="Аниме" value="5" />
          </UserTabList>
          <UserTabPanel value="1">{renderMediaCards(10)}</UserTabPanel>
          <UserTabPanel value="2">{renderMediaCards(7)}</UserTabPanel>
          <UserTabPanel value="3">{renderMediaCards(3)}</UserTabPanel>
          <UserTabPanel value="4">{renderMediaCards(4)}</UserTabPanel>
          <UserTabPanel value="5">{renderMediaCards(6)}</UserTabPanel>
        </TabContext>

    </UserContainer>
  );
};

export default UserCollection;
