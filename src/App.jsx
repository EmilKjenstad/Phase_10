import { Navigate, useRoutes } from "react-router-dom"
import { GameSetup, GameTrack } from "./pages"

function App() {
  return useRoutes([
    { path: "/", element: <Navigate to="/setup" replace /> },
    { path: "/setup", element: <GameSetup /> },
    { path: "/track", element: <GameTrack /> },
  ])
}

export default App
