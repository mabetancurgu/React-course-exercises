/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

//mockup parcial
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <Navbar />", () => {
  const contextValue = {
    logged: true,
    user: { id: "123", name: "Pedro" },
    logout: jest.fn(), //asi defino que se usa una funcion
  };

  beforeEach(() => jest.clearAllMocks());
  test("Debe de mostrar el nombre del usuario si esta loggead", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Pedro")).toBeTruthy();
  });

  test("Debe de llamar el loggout y navigate cuando se hace click en el btn de logout", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);
    expect(contextValue.logout).toHaveBeenCalled(); //asi valido que la fn fue llamada
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
