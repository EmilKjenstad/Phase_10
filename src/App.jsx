import { Navigate, Outlet, useRoutes } from "react-router-dom"
import { GameSetup, GameTrack } from "./pages"
import { GameConfigProvider } from "./providers/GameConfigProvider"

function App() {
  return useRoutes([
    { path: "/", element: <Navigate to="/setup" replace /> },
    {
      element: (
        <GameConfigProvider>
          <Outlet />
        </GameConfigProvider>
      ),
      children: [
        { path: "/setup", element: <GameSetup /> },
        { path: "/track", element: <GameTrack /> },
      ],
    },
  ])
}

export default App
