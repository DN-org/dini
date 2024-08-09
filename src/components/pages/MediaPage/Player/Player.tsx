//Packages
import React, { useState } from "react";

//Components
import CustomButton from "../../../CustomButton/CustomButton";
import {
  PlayerIframeFirst,
  PlayerIframeSecond,
  PlayerIframeThird,
} from "./Player__Iframe/Player__Iframe";

//Styles
import {
  PlayerCont,
  OtherPlayerCont,
  AnotherPlayerCont,
  PlayerPlay,
} from "./Player.styled";

const Player: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Player_1");

  const handleTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(e.currentTarget.getAttribute("data-name") || "Player_1");
  };

  return (
    <PlayerCont>
      <OtherPlayerCont>
        <h3>Смотреть</h3>

        <AnotherPlayerCont>
          <CustomButton data-name="Player_1" onClick={handleTab}>
            <h4> Плеер 1</h4>
          </CustomButton>

          <CustomButton data-name="Player_2" onClick={handleTab}>
            <h4> Плеер 2</h4>
          </CustomButton>

          <CustomButton data-name="Player_3" onClick={handleTab}>
            <h4> Плеер 3</h4>
          </CustomButton>
        </AnotherPlayerCont>
      </OtherPlayerCont>

      <PlayerPlay>
        {activeTab === "Player_1" && <PlayerIframeFirst />}
        {activeTab === "Player_2" && <PlayerIframeSecond />}
        {activeTab === "Player_3" && <PlayerIframeThird />}
      </PlayerPlay>
    </PlayerCont>
  );
};

export default Player;
