import { useContext, useState } from "react";
import RandomGameList from "./RandomGameList";
import "../../assets/randomizer.css"
import GameForm from "./GameForm";
import SlotMachine from "./SlotMachine";
import { Link } from "react-router-dom";
import BackIcon from "../icons/BackIcon";
import { useSelectedGames } from "../../context/randomizer/useSelectedGames";

export interface SelectedGame {
  id: string;
  emote: string;
  name: string;
}

const Randomizer: React.FC = () => {

  const { selectedGames, addOrRemoveGames } = useSelectedGames();

  const [isSlotMachineDisplayed, setIsSlotMachineDisplayed] = useState<boolean>(false);

  const handleAddGame = (game: SelectedGame): void => {
    addOrRemoveGames(game);
  };

  const handleDelete = (id: string): void => {
    const gameToRemove = selectedGames.find(g => g.id === id);
    if (gameToRemove) {
      addOrRemoveGames(gameToRemove);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
      <div className="randomizer">
        <div className="game-selection">
          <GameForm onAddGame={handleAddGame} />
          {selectedGames.length > 0 && <RandomGameList games={selectedGames} onDelete={handleDelete} />}
        </div>
        {isSlotMachineDisplayed && <SlotMachine slots={selectedGames} onClose={() => setIsSlotMachineDisplayed(false)} />}
      </div>
      {selectedGames.length > 1 && <button onClick={() => setIsSlotMachineDisplayed(true)}>Open Slot Machine</button>}
      <Link to="/">
        <BackIcon />
      </Link>
    </div>
  );
};

export default Randomizer;