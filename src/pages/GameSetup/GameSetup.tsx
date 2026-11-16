import { Button, Box, Card, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { PlayerInput } from "../../components"
import { useState } from "react"

export const GameSetup = () => {
  const [players, setPlayers] = useState(() => [
    { id: crypto.randomUUID(), name: "" },
    { id: crypto.randomUUID(), name: "" },
  ])

  const addPlayer = () => {
    const player = { id: crypto.randomUUID(), name: "" }
    setPlayers((currentPlayers) => [...currentPlayers, player])
  }

  const updatePlayer = (id: string, value: string) => {
    setPlayers((currentPlayers) =>
      currentPlayers.map((player) =>
        player.id === id ? { ...player, name: value } : player
      )
    )
  }

  const deletePlayer = (id: string) => {
    setPlayers((currentPlayers) =>
      currentPlayers.filter((player) => player.id !== id)
    )
  }

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        p: 3,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <Typography align="center" sx={{ mb: 3 }}>
          Phase 10 * Game Tracker
        </Typography>

        <Card
          variant="outlined"
          sx={{
            p: 2.5,
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Typography variant="caption">
            PLAYERS ({players.length}/6)
          </Typography>

          {players.map((player) => (
            <PlayerInput
              key={player.id}
              value={player.name}
              onChange={(value) => updatePlayer(player.id, value)}
              onRemove={() => deletePlayer(player.id)}
            />
          ))}

          {players.length < 6 && (
            <Button onClick={addPlayer} variant="outlined" fullWidth>
              + Add Player
            </Button>
          )}
        </Card>

        <Button component={Link} to="/track" variant="contained" fullWidth >
          Start game
        </Button>
      </Box>
    </Box>
  )
}

export default GameSetup
