import {getUser} from '../../base/05-funciones'


describe("Pruebas en 05 funciones", () => {

  test("debe de retornar un objeto", () => {

    const usuarioTest = {

      uid: "ABC123",
      username: "El_Papi1502",

    };

    const user = getUser();

    expect(user).toEqual(usuarioTest)

  });

});

