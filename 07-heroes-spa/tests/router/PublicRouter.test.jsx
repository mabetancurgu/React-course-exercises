import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRouter } from "../../src/router/PublicRouter";

describe("Pruebas en <PublicRouter/>", () => {
  test("Debe de mostrar el children si el usuario no esta autenticado", () => {
    const contextValue = { logged: false };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Ruta publica</h1>
        </PublicRouter>
      </AuthContext.Provider>
    );
    // Solo se deberia mostrar el h1 si NO esta autenticado
    expect(screen.getByText("Ruta publica")).toBeTruthy();
  });

  test("Debe de mostrar la pagina indicada si el usuario esta autenticado", () => {
    const contextValue = { logged: true, user: { id: "111", name: "Juana" } };
    // Es necesario crearle todo el contexto de las rutas
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRouter>
                  <h1>Ruta publica</h1>
                </PublicRouter>
              }
            />
            <Route path="/marvel" element={<h1>Pagina marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // Debeia mostrar el h1 de la pagina de marvel
    expect(screen.getByText("Pagina marvel")).toBeTruthy();
  });
});
