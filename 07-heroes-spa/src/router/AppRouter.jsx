import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../auth";
import {
  childrenHeroesRoutes,
  HeroesRoutes,
} from "../heroes/routes/HeroesRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRouter>
        <LoginPage />
      </PublicRouter>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRouter>
        <HeroesRoutes />
      </PrivateRouter>
    ),
    children: childrenHeroesRoutes,
  },
]);
export const AppRouter = () => <RouterProvider router={router} />;
