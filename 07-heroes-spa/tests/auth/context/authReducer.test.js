/* eslint-disable no-undef */

import { authReducer, types } from "../../../src/auth";
describe("Pruebas en authReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Debe de (login) llamar el login autenticar y establecer user", () => {
    const action = { type: types.login, payload: { id: "123", name: "Juan" } };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, user: action.payload });
  });

  test("Debe de (logout) borrar el name del usuario y logged en false", () => {
    const state = { logged: true, user: { id: "123", name: "Pedro" } };
    const action = { type: types.logout };
    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });
});
