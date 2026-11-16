import { createContext, useContext } from "react"

export interface Player {
  id: string
  name: string
}

export interface GameConfig {
  players: Player[]
}

interface GameConfigContextValue {
  config: GameConfig
  addPlayer: () => void
  updatePlayer: (id: string, name: string) => void
  deletePlayer: (id: string) => void
}

export const GameConfigContext = createContext<GameConfigContextValue | undefined>(undefined)

export const useGameConfig = () => {
  const context = useContext(GameConfigContext)

  if (context === undefined) {
    throw new Error("useGameConfig must be used within GameConfigProvider")
  }

  return context
}
