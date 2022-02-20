import { getHeroeByIdAsync } from "../../base/09-promesas";

import heroes from "../data/heroes";

describe("Debe retrornar una tarea asincrona", () => {
  test("No debe pasar si la promesa no se cumple", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });
});
