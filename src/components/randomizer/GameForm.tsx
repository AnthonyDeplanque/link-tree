import React, { FormEvent } from "react";
import { SelectedGame } from "./Randomizer";
import "../../assets/css/randomizer.css";
import { uuid } from "../../Helpers/UUID";
import CancelIcon from "../icons/CancelIcon";
import BlankIcon from "../icons/BlankIcon";

interface GameFormProps {
  onEmoteGridOpen: () => void;
  showEmoteGrid: boolean;
  gameEmote: string;
  gameName: string;
  onAddGame: (game: SelectedGame) => void;
  setGameEmote: (value: string) => void;
  setGameName: (value: string) => void;
}

const GameForm: React.FC<GameFormProps> = (props) => {

  const { showEmoteGrid, gameEmote, gameName, onEmoteGridOpen, onAddGame, setGameEmote, setGameName, } = props;

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



  return (
    <>
      <form className="add-game card-box" onSubmit={(e) => handleSubmit(e)}>
        <div className="button-selector-div">
          <div className="slot-box">{gameEmote ? gameEmote : <BlankIcon />}</div>
        </div>

        <div className="selected-emote">
          <div className="button-selector-div">
            <button className="game-selector-button" type="button" onClick={onEmoteGridOpen}>
              {showEmoteGrid ? "Close Emote panel" : "Select Emote"}
            </button>
          </div>
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