/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

//mockup parcial
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <SearchPage />", () => {
  beforeEach(() => jest.clearAllMocks());
  test("Debe de mostrarse con los valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrarse a Batman y el input con el valor del queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toContain("/assets/heroes/dc-batman.jpg");

    const alert = screen.getByLabelText("alert-danger");
    expect(alert.style.display).toBe("none");
  });

  test("Debe de mostrarse a un error si no se encuentra el heroe(batman123)", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const alert = screen.getByLabelText("alert-danger");
    expect(alert.style.display).toBe("");
  });

  test("Debe de llamar el navigate a la pantalla nueva", async () => {
    // ingresar un valor a la caja del text, simular el Eevento
    // tomar el formulario y dispararle el evento submit
    // y el valor del input de la caja de texto debe llamar el navigate con ese argumento
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const inputHeroe = screen.getByPlaceholderText("Search a hero");
    const value = "batman";
    fireEvent.change(inputHeroe, {
      target: {
        value,
      },
    });
    expect(inputHeroe.value).toBe("batman");

    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=batman");
  });
});
