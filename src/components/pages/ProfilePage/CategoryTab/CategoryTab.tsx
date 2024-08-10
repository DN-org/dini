import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

//styles
import {
  ContainerTabs,
  TextTab,
  MediaContainer,
  MediaContent,
  ContentContainer,
} from "./CategoryTab.styled";

import StarRatingDisplay from "../../../StarRatingDisplay/StarRatingDisplay";

// Типизация для TabPanel
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

// Компонент для отображения фильмов
interface FilmsPanelProps {
  mediaItems: Array<number>;
}

interface SeriesPanelProps {
  mediaItems: Array<number>;
}

interface СartoonsPanelProps {
  mediaItems: Array<number>;
}

interface AnimatedSeriesPanelProps {
  mediaItems: Array<number>;
}

interface AnimePanelProps {
  mediaItems: Array<number>;
}

const FilmsPanel: React.FC<FilmsPanelProps> = ({ mediaItems }) => {
  return (
    <MediaContainer>
      {mediaItems.map((_, index) => (
        <MediaContent key={index}>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/300x450"
            alt=""
          />
          <ContentContainer>
            <h4>1+1 (2011)</h4>
            <StarRatingDisplay value={5} fontSize={"30px"} />
            <p>10.10.2001</p>
          </ContentContainer>
        </MediaContent>
      ))}
    </MediaContainer>
  );
};

const SeriesPanel: React.FC<SeriesPanelProps> = ({ mediaItems }) => {
  return (
    <MediaContainer>
      {mediaItems.map((_, index) => (
        <MediaContent key={index}>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10671298/b70f8534-c0be-44e4-a9d3-091be4ffd162/300x450"
            alt=""
          />
          <ContentContainer>
            <h4>Голяк (сериал 2019)</h4>
            <StarRatingDisplay value={5} fontSize={"30px"} />
            <p>10.10.2001</p>
          </ContentContainer>
        </MediaContent>
      ))}
    </MediaContainer>
  );
};

const СartoonsPanel: React.FC<СartoonsPanelProps> = ({ mediaItems }) => {
  return (
    <MediaContainer>
      {mediaItems.map((_, index) => (
        <MediaContent key={index}>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/6e11a16e-c9e7-491f-9162-01098a7d8dd9/300x450"
            alt=""
          />
          <ContentContainer>
            <h4>Тайна Коко (2017)</h4>
            <StarRatingDisplay value={5} fontSize={"30px"} />
            <p>10.10.2001</p>
          </ContentContainer>
        </MediaContent>
      ))}
    </MediaContainer>
  );
};

const AnimatedSeriesPanel: React.FC<AnimatedSeriesPanelProps> = ({
  mediaItems,
}) => {
  return (
    <MediaContainer>
      {mediaItems.map((_, index) => (
        <MediaContent key={index}>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10835644/9a7203bd-7f9d-4f45-bc39-cdf7d4156332/300x450"
            alt=""
          />
          <ContentContainer>
            <h4>Рик и Морти (сериал 2013)</h4>
            <StarRatingDisplay value={5} fontSize={"30px"} />
            <p>10.10.2001</p>
          </ContentContainer>
        </MediaContent>
      ))}
    </MediaContainer>
  );
};

const AnimePanel: React.FC<AnimePanelProps> = ({ mediaItems }) => {
  return (
    <MediaContainer>
      {mediaItems.map((_, index) => (
        <MediaContent key={index}>
          <img
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/75f72ac1-1362-4a17-9693-461017555af4/300x450"
            alt=""
          />
          <ContentContainer>
            <h4>Ван-Пис (сериал 1999)</h4>
            <StarRatingDisplay value={5} fontSize={"30px"} />
            <p>10.10.2001</p>
          </ContentContainer>
        </MediaContent>
      ))}
    </MediaContainer>
  );
};

// Функция для генерации props доступности
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Основной компонент
const CategoryTab: React.FC = () => {
  const [value, setValue] = useState(0);
  const mediaItems = Array(5).fill(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ContainerTabs
          value={value}
          onChange={handleChange}        
          aria-label="basic tabs example"
        >
          <TextTab label="Фильмы" {...a11yProps(0)} />
          <TextTab label="Сериалы" {...a11yProps(1)} />
          <TextTab label="Мультфильмы" {...a11yProps(2)} />
          <TextTab label="Мультсериалы" {...a11yProps(3)} />
          <TextTab label="Аниме" {...a11yProps(4)} />
        </ContainerTabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <FilmsPanel mediaItems={mediaItems} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <AnimatedSeriesPanel mediaItems={mediaItems} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <СartoonsPanel mediaItems={mediaItems} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <SeriesPanel mediaItems={mediaItems} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <AnimePanel mediaItems={mediaItems} />
      </CustomTabPanel>
    </div>
  );
};

export default CategoryTab;