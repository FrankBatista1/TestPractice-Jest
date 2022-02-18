import '@testing-library/jest-dom';

import getSaludo from '../../base/02-template-string'

describe('Pruebas de template string', () => {

  test('getSaludo debe retornar Hola Frank', () => { 

    const nombre = 'Fernando';

    const saludo = getSaludo(nombre);

    expect( saludo ).toBe('Hola' + nombre)

   })
})