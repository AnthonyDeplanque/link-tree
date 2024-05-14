import { useState } from "react";
import RandomGameList from "./RandomGameList";
import "../../assets/randomizer.css"
import GameForm from "./GameForm";
import SlotMachine from "./SlotMachine";
import { Link } from "react-router-dom";
import BackIcon from "../icons/BackIcon";

export interface SelectedGame {
  id: string;
  emote: string;
  name: string;
}

const Randomizer: React.FC = () => {
  const [games, setGames] = useState<SelectedGame[]>([]);

  const handleAddGame = (game: SelectedGame) => {
    setGames((prevGames) => [...prevGames, game]);
  };

  const handleDelete = (id: string) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  return (<div style={{ display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
    <div className="randomizer">
      <div className="game-selection">
        <GameForm onAddGame={handleAddGame} />
        {games.length > 0 && <RandomGameList games={games} onDelete={handleDelete} />}
      </div>
      {games.length > 1 && <SlotMachine slots={games} />}
    </div>
    <Link to="/">
      <BackIcon />
    </Link>
  </div>
  );
};

export default Randomizer;