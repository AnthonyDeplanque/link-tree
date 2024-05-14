import React, { FormEvent, useState } from "react";
import EmoteGrid from "./EmoteGrid";
import { SelectedGame } from "./Randomizer";
import "../../assets/randomizer.css";
import { uuid } from "../../Helpers/UUID";

interface GameFormProps {
  onAddGame: (game: SelectedGame) => void;
}

const GameForm: React.FC<GameFormProps> = ({ onAddGame }) => {
  const [gameEmote, setGameEmote] = useState<string>("");
  const [gameName, setGameName] = useState<string>("");
  const [showEmoteGrid, setShowEmoteGrid] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!gameEmote || !gameName) {
      return;
    }

    const newGame: SelectedGame = { id: uuid(), emote: gameEmote, name: gameName };
    onAddGame(newGame);

    // Reset input fields
    setGameEmote("");
    setGameName("");
  };

  const handleSelectEmote = (emote: string) => {
    setGameEmote(emote);
    setShowEmoteGrid(false);
  };

  return (
    <form className="add-game" onSubmit={(e) => handleSubmit(e)}>
      <div className="emote-selector">
        <button type="button" onClick={() => setShowEmoteGrid(!showEmoteGrid)}>
          {showEmoteGrid ? "Close Emote panel" : "Select Emote"}
        </button>
        {showEmoteGrid && <EmoteGrid onSelect={handleSelectEmote} onClose={() => setShowEmoteGrid(false)} />}
        {gameEmote && <span>{gameEmote}</span>}
      </div>
      <div className="name-selector">
        <label>Game name</label>
        <input value={gameName} onChange={(e) => setGameName(e.target.value)} />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default GameForm;