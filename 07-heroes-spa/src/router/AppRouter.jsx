import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../auth";
import { childrenHeroesRoutes, HeroesRoutes } from "../heroes/routes/HeroesRoutes";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <HeroesRoutes />,
    children: childrenHeroesRoutes,
  },
]);
export const AppRouter = () => <RouterProvider router={router} />;
