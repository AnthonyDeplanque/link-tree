import { useState } from "react";
import RandomGameList from "./RandomGameList";
import "../../assets/css/randomizer.css"
import GameForm from "./GameForm";
import SlotMachine from "./SlotMachine";
import { Link } from "react-router-dom";
import BackIcon from "../icons/BackIcon";
import { useSelectedGames } from "../../context/randomizer/useSelectedGames";
import EmoteGrid from "./EmoteGrid";

export interface SelectedGame {
  id: string;
  emote: string;
  name: string;
}

const Randomizer: React.FC = () => {

  const { selectedGames, addOrRemoveGames } = useSelectedGames();

  const [isSlotMachineDisplayed, setIsSlotMachineDisplayed] = useState<boolean>(false);
  const [isEmoteGridShown, setIsEmoteGridShown] = useState<boolean>(false);
  const [gameEmote, setGameEmote] = useState<string>("");
  const [gameName, setGameName] = useState<string>("");

  const handleAddGame = (game: SelectedGame): void => {
    addOrRemoveGames(game);
  };

  const handleDelete = (id: string): void => {
    const gameToRemove = selectedGames.find(g => g.id === id);
    if (gameToRemove) {
      addOrRemoveGames(gameToRemove);
    }
  };

  const handleSelectEmote = (emote: string) => {
    setGameEmote(emote);
    setIsEmoteGridShown(false);
  };

  const onEmoteGridOpen = () => {
    setIsEmoteGridShown(true);
    if (isSlotMachineDisplayed) {
      setIsSlotMachineDisplayed(false);
    }
  }

  const onSlotMachineOpen = () => {
    setIsSlotMachineDisplayed(true);
    if (isEmoteGridShown) {
      setIsEmoteGridShown(false);
    }
  }


  return (
    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
      <div className="randomizer">
        <div className="game-selection">
          <GameForm
            onAddGame={handleAddGame}
            showEmoteGrid={isEmoteGridShown}
            onEmoteGridOpen={onEmoteGridOpen}
            gameEmote={gameEmote}
            gameName={gameName}
            setGameName={setGameName}
            setGameEmote={setGameEmote} />
          {selectedGames.length > 0 && <RandomGameList games={selectedGames} onDelete={handleDelete} />}
        </div>

        {isEmoteGridShown && <EmoteGrid onSelect={handleSelectEmote} onClose={() => setIsEmoteGridShown(false)} />}
        {isSlotMachineDisplayed && <SlotMachine slots={selectedGames} onClose={() => setIsSlotMachineDisplayed(false)} />}
      </div>
      {selectedGames.length > 1 && <div className="button-selector-div">
        <button className="game-selector-button" onClick={onSlotMachineOpen}>Open Slot Machine</button></div>}

      <Link to="/">
        <BackIcon />
      </Link>
    </div>
  );
};

export default Randomizer;