import { Box, Button, Card, Typography } from "@mui/material"
import StarRoundedIcon from "@mui/icons-material/StarRounded"
import { Link } from "react-router-dom"
import { useGameConfig } from "../../providers/GameConfigContext"

export const GameTrack = () => {
  const { config: { players } } = useGameConfig()

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        px: 3,
        py: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 448, mx: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, mb: 2 }}>
          <Box>
            <Typography
              component="h1"
              sx={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 700 }}
            >
              Phase 10
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Round 1
            </Typography>
          </Box>

          <Button
            component={Link}
            to="/setup"
            variant="outlined"
            sx={{
              minHeight: 34,
              px: 1.75,
              fontSize: "0.75rem",
              color: "#efaaa2",
              bgcolor: "#211b1d",
              borderColor: "#4b323a",
              borderStyle: "solid",
              "&:hover": {
                bgcolor: "#302025",
                borderColor: "#efaaa2",
              },
            }}
          >
            New Game
          </Button>
        </Box>

        <Card variant="outlined" sx={{ p: 0.5, mb: 1.5 }}>
          <Box role="tablist" aria-label="Game views" sx={{ display: "flex", gap: 0.5 }}>
            <Button
              id="scoreboard-tab"
              role="tab"
              aria-selected="true"
              aria-controls="scoreboard-panel"
              variant="contained"
              fullWidth
              sx={{ minWidth: 0, fontSize: "0.75rem" }}
            >
              Scoreboard
            </Button>
            <Button
              role="tab"
              aria-selected="false"
              disabled
              fullWidth
              title="Round entry is coming soon"
              sx={{ minWidth: 0, fontSize: "0.75rem" }}
            >
              Enter Round 1
            </Button>
          </Box>
        </Card>

        <Box
          id="scoreboard-panel"
          role="tabpanel"
          aria-labelledby="scoreboard-tab"
          sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}
        >
          {players.map((player, index) => {
            const accent = index === 0 ? "#e5a5cf" : "#b9ace2"

            return (
              <Card
                key={player.id}
                variant="outlined"
                sx={{ p: 1.75, borderRadius: 2, borderColor: "#223027" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      flexShrink: 0,
                      borderRadius: 1,
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "#18231b",
                      backgroundImage: index === 0
                        ? "linear-gradient(135deg, #f3db91, #efa8d6)"
                        : "none",
                      color: index === 0 ? "#26202b" : "text.secondary",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                    }}
                  >
                    {index === 0
                      ? <StarRoundedIcon sx={{ fontSize: 18 }} titleAccess="First place" />
                      : index + 1}
                  </Box>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, overflowWrap: "anywhere" }}>
                      {player.name || `Player ${index + 1}`}
                    </Typography>
                    <Box
                      role="progressbar"
                      aria-label={`${player.name || `Player ${index + 1}`} phase`}
                      aria-valuemin={0}
                      aria-valuemax={10}
                      aria-valuenow={1}
                      aria-valuetext="Phase 1 of 10"
                      sx={{ display: "flex", gap: 0.375, mt: 0.75 }}
                    >
                      {Array.from({ length: 10 }, (_, phase) => (
                        <Box
                          key={phase}
                          sx={{
                            flex: 1,
                            height: 5,
                            borderRadius: 1,
                            bgcolor: phase === 0 ? accent : "#18231b",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ textAlign: "right", flexShrink: 0 }}>
                    <Typography
                      sx={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      0
                    </Typography>
                    <Typography sx={{ mt: 0.5, fontSize: "0.625rem", fontWeight: 700, color: accent }}>
                      Phase 1
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 1.25, px: 1.25, py: 0.75, borderRadius: 0.75, bgcolor: `${accent}20` }}>
                  <Typography sx={{ fontSize: "0.6875rem", fontWeight: 600, color: accent }}>
                    Current: Phase 1 - 2 sets of 3
                  </Typography>
                </Box>
              </Card>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default GameTrack