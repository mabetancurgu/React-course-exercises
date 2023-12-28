import { Navbar } from "../../ui";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../pages";
import { Navigate, Outlet } from "react-router-dom";

// explain:
// Cuando defines rutas con el componente Route,
// los componentes asociados a esas rutas se renderizan dentro del Outlet.
// En resumen, el Outlet determina el lugar donde aparecerán los contenidos de las rutas en tu interfaz de usuario.
// es un contenedor especifico para rutas.
// Todos los hijos definidos en el outlet tendran el navbar
export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export const childrenHeroesRoutes = [
  { path: "/marvel", element: <MarvelPage /> },
  { path: "/dc", element: <DcPage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/hero/:id", element: <HeroPage/> },
  { path: "/", element: <Navigate to={"/marvel"} /> },
];
