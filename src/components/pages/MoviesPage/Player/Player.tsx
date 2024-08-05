import React, { useState } from "react";

// styles
import {
  PlayerCont,
  OtherPlayerCont,
  AnotherPlayerCont,
  PlayerPlay,
} from "./Player.styled";

// dummy components for illustration
const ProductAdmin = () => <div>Player_1</div>;
const ClientNumber = () => <div>Player_2</div>;
const AnotherComponent = () => <div>Player_3</div>;

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
          <button data-name="Player_1" onClick={handleTab}>
            <h4> Плеер 1</h4>
          </button>

          <button data-name="Player_2" onClick={handleTab}>
            <h4> Плеер 2</h4>
          </button>

          <button data-name="Player_3" onClick={handleTab}>
            <h4> Плеер 3</h4>
          </button>
        </AnotherPlayerCont>
      </OtherPlayerCont>

      <PlayerPlay>
        {activeTab === "Player_1" && <ProductAdmin />}
        {activeTab === "Player_2" && <ClientNumber />}
        {activeTab === "Player_3" && <AnotherComponent />}
      </PlayerPlay>
    </PlayerCont>
  );
};

export default Player;
