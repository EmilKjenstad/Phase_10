# Phase 10

## Routes

- `/` redirects to `/setup`.
- `/setup` displays player setup; **Start game** opens `/track`.
- `/track` displays the game tracker.

The tracker currently shows the initial scoreboard layout using saved players,
with zero scores and Phase 1. Round entry and scoring are not implemented yet.
**New Game** returns to setup and keeps the configured players.

## Theme

The shared dark MUI theme is defined in [src/configs/theme.ts](src/configs/theme.ts)
and applied in [src/main.jsx](src/main.jsx). Update its palette and component
overrides to change colors, inputs, cards, and buttons across the app.
Enabled primary contained buttons share the mint-to-pink gradient globally;
disabled buttons keep the muted style.

## Game configuration

`GameConfigProvider` wraps `/setup` and `/track` and persists player IDs and names
in `localStorage` under `phase-10-config`. Use `useGameConfig` from
[src/providers/GameConfigContext.ts](src/providers/GameConfigContext.ts) to access
`config.players`, `addPlayer`, `updatePlayer`, and `deletePlayer` in either page.
Player counts remain between two and six. Storage failures display an error;
unreadable saved data is not overwritten automatically.