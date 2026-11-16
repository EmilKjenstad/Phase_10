import { useEffect, useState, type ReactNode } from "react"
import { Alert } from "@mui/material"
import { GameConfigContext, type GameConfig, type Player } from "./GameConfigContext"

const storageKey = "phase-10-config"

const isPlayer = (value: unknown): value is Player =>
  typeof value === "object" &&
  value !== null &&
  "id" in value &&
  typeof value.id === "string" &&
  value.id.length > 0 &&
  "name" in value &&
  typeof value.name === "string"

const isGameConfig = (value: unknown): value is GameConfig =>
  typeof value === "object" &&
  value !== null &&
  "players" in value &&
  Array.isArray(value.players) &&
  value.players.length >= 2 &&
  value.players.length <= 6 &&
  value.players.every(isPlayer) &&
  new Set(value.players.map((player) => player.id)).size === value.players.length

const createConfig = (): GameConfig => ({
  players: [
    { id: crypto.randomUUID(), name: "" },
    { id: crypto.randomUUID(), name: "" },
  ],
})

const loadConfig = () => {
  try {
    const savedConfig = localStorage.getItem(storageKey)
    if (savedConfig === null) {
      return { config: createConfig(), loadError: null }
    }

    const config: unknown = JSON.parse(savedConfig)
    if (!isGameConfig(config)) {
      throw new Error("Saved game configuration has an invalid format")
    }

    return { config, loadError: null }
  } catch (error) {
    console.error("Could not load game configuration", error)
    return {
      config: createConfig(),
      loadError: "Saved configuration could not be loaded. Changes will not be saved until the storage issue is resolved and the page is reloaded.",
    }
  }
}

export const GameConfigProvider = ({ children }: { children: ReactNode }) => {
  const [initialState] = useState(loadConfig)
  const [config, setConfig] = useState(initialState.config)
  const [saveError, setSaveError] = useState<string | null>(null)

  useEffect(() => {
    if (initialState.loadError !== null) return

    try {
      localStorage.setItem(storageKey, JSON.stringify(config))
      setSaveError(null)
    } catch (error) {
      console.error("Could not save game configuration", error)
      setSaveError("Configuration could not be saved. Changes may be lost when you reload.")
    }
  }, [config, initialState.loadError])

  const addPlayer = () => {
    const player = { id: crypto.randomUUID(), name: "" }
    setConfig((current) =>
      current.players.length < 6
        ? { ...current, players: [...current.players, player] }
        : current
    )
  }

  const updatePlayer = (id: string, name: string) => {
    setConfig((current) => ({
      ...current,
      players: current.players.map((player) =>
        player.id === id ? { ...player, name } : player
      ),
    }))
  }

  const deletePlayer = (id: string) => {
    setConfig((current) =>
      current.players.length > 2
        ? { ...current, players: current.players.filter((player) => player.id !== id) }
        : current
    )
  }

  return (
    <GameConfigContext.Provider value={{ config, addPlayer, updatePlayer, deletePlayer }}>
      {(initialState.loadError || saveError) && (
        <Alert severity="error">{initialState.loadError || saveError}</Alert>
      )}
      {children}
    </GameConfigContext.Provider>
  )
}
