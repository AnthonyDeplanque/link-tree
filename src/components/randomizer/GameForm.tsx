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
    <>
      {showEmoteGrid && <EmoteGrid onSelect={handleSelectEmote} onClose={() => setShowEmoteGrid(false)} />}
      <form className="add-game card-box" onSubmit={(e) => handleSubmit(e)}>
        <div className="selected-emote">
          <div className="button-selector-div">
            <button className="game-selector-button" type="button" onClick={() => setShowEmoteGrid(!showEmoteGrid)}>
              {showEmoteGrid ? "Close Emote panel" : "Select Emote"}
            </button>
          </div>
          {gameEmote && <div className="slot-box">{gameEmote}</div>}
        </div>
        <div className="name-selector">
          <label>Game name</label>
          <input className="card-box" value={gameName} onChange={(e) => setGameName(e.target.value)} />
        </div>
        <div className="button-selector-div">
          <button className="game-selector-button" type="submit">add</button>
        </ div>
      </form>
    </>
  );
};

export default GameForm;