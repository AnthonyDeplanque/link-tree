import { SelectedGame } from "./Randomizer"
import '../../assets/random-game-list.css'

export interface RandomGameListProps {
  games: SelectedGame[],
  onDelete: (id: string) => void,
}



const RandomGameList = (props: RandomGameListProps) => {
  const { games, onDelete } = props

  return <div className="game-list">
    {games && games?.map(game => {
      const { id, name, emote } = game;
      return <div key={id} className="game-item">
        <div className="game-name">
          <p>{emote}</p>
          <p>{name}</p>
        </div>
        <p className='game-item-delete' onClick={() => onDelete(id)}>❌</p>
      </div>
    })}
    <button onClick={
      () => {
        games.forEach((game) => onDelete(game.id))
      }
    }> Clear game list</button>
  </div>
}

export default RandomGameList;