import { useContext } from 'react'
import { SelectedGamesContext, SelectedGamesContextType } from './SelectedGamesContext'

export const useSelectedGames = (): SelectedGamesContextType => {
  const context = useContext(SelectedGamesContext)
  if (!context) {
    throw new Error('useSelectedGames must be used within a selectedGame Context Provider')
  }
  return context
}
