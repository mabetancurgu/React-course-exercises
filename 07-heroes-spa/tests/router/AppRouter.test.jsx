import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext, LoginPage } from "../../src/auth";
import { MarvelPage } from "../../src/heroes/pages/MarvelPage";

describe("Pruebas en <AppRouter />", () => {
  test("Debe de mostrar el login si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <LoginPage />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("Debe de mostrar marvel si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: { id: "123", user: "Juan" },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <MarvelPage />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Marvel Comics").length).toBeGreaterThanOrEqual(
      1
    );
  });
});
