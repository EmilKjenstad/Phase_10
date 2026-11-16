import { Button, Box, Card, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { PlayerInput } from "../../components"
import { useGameConfig } from "../../providers/GameConfigContext"
import dr3amscapeLogo from "../../assets/dr3amscapeLogo.svg"

export const GameSetup = () => {
  const { config: { players }, addPlayer, updatePlayer, deletePlayer } = useGameConfig()

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >

      <Box sx={{ gap: 2, display: "flex", flexDirection: "column", width: "100%", maxWidth: 360 }}>
        <Box
          component="img"
          src={dr3amscapeLogo}
          alt="dr3amscape - Phase 10 Game Tracker"
          sx={{ display: "block", width: "50%", margin: "0 auto", height: "auto" }}
        />

        <Typography
          variant="caption"
          align="center"
          sx={{
            mb: 3,
            color: "#9184b6",
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
          }}
        >
          PHASE 10 - GAME TRACKER
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
              onRemove={players.length > 2 ? () => deletePlayer(player.id) : undefined}
            />
          ))}

          {players.length < 6 && (
            <Button onClick={addPlayer} variant="outlined" fullWidth>
              + Add Player
            </Button>
          )}
        </Card>

        <Button
          component={Link}
          to="/track"
          variant="contained"
          disabled={players.some((player) => !player.name)}
          fullWidth
        >
          Start Game
        </Button>
      </Box>
    </Box>
  )
}

export default GameSetup
