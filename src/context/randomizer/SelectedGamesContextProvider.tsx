import React, { ReactNode, useEffect, useState } from "react";
import { SelectedGame } from "../../components/randomizer/Randomizer";
import { SelectedGamesContext, SelectedGamesContextType } from "./SelectedGamesContext";

export const SAVED_GAMES_LOCALSTORAGE = "savedGames"

export const SelectedGamesContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedGames, setSelectedGames] = useState<SelectedGame[]>(() => {
    const savedGames = localStorage.getItem(SAVED_GAMES_LOCALSTORAGE)
    return savedGames ? JSON.parse(savedGames) : [];
  })

  useEffect(() => {

    localStorage.setItem(SAVED_GAMES_LOCALSTORAGE, JSON.stringify(selectedGames))
  }, [selectedGames])

  const addOrRemoveGames = (game: SelectedGame) => {
    setSelectedGames(prevSelectedGames => {
      if (prevSelectedGames.some(g => g.id === game.id)) {
        return prevSelectedGames.filter(g => g.id !== game.id);
      } else {
        return [...prevSelectedGames, game];
      }
    });
  }
  const contextValue: SelectedGamesContextType = {
    selectedGames,
    addOrRemoveGames,
  }

  return (
    <SelectedGamesContext.Provider value={contextValue} >
      {children}
    </SelectedGamesContext.Provider>
  );
}