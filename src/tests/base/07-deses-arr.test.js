import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas de desestructuracion', () => {

  test('Debe de retornar un string y un numero', () => {
    
    const [letras, numeros] = retornaArreglo()

    expect(typeof letras).toBe('string')

    expect(typeof numeros).toBe('number')

  })
})