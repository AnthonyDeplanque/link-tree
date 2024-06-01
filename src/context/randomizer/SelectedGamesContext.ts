import { createContext } from 'react'
import { SelectedGame } from '../../components/randomizer/Randomizer'

export interface SelectedGamesContextType {
  selectedGames: SelectedGame[]
  addOrRemoveGames: (game: SelectedGame) => void
}

export const SelectedGamesContext = createContext<SelectedGamesContextType | undefined>(undefined)
