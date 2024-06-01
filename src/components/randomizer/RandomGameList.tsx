import { SelectedGame } from "./Randomizer"
import '../../assets/css/random-game-list.css'
import CancelIcon from "../icons/CancelIcon"

export interface RandomGameListProps {
  games: SelectedGame[],
  onDelete: (id: string) => void,
}



const RandomGameList = (props: RandomGameListProps) => {
  const { games, onDelete } = props

  return <div className="game-list card-box">
    {games && games?.map(game => {
      const { id, name, emote } = game;
      return <div key={id} className="game-item card-box">
        <div className="game-name ">
          <p>{emote}</p>
          <p>{name}</p>
        </div>
        <p onClick={() => onDelete(id)}><CancelIcon /></p>
      </div>
    })}
    <div className="button-selector-div">
      <button className="game-selector-button" onClick={
        () => {
          games.forEach((game) => onDelete(game.id))
        }
      }> Clear game list</button>
    </div>
  </div>
}

export default RandomGameList;