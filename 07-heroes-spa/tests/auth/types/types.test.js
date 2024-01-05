/* eslint-disable no-undef */
import { types } from "../../../src/auth";
describe("Pruebas en Types", () => {
  test("Debe de regresar los types adecuados", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
