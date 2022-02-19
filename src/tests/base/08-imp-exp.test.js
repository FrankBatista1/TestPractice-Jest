import { getHeroeById } from "../../base/08-imp-exp";
import heroes from '../data/heroes';

describe('Pruebas en funciones de heroes', () => {

  test('debe retornar un heroe por id', () => { 
    const id = 1;
    const heroe = getHeroeById(id);

    const heroesData = heroes.find(h => h.id === id)

    expect( heroe).toEqual(heroesData)
   })

   test('debe retornar undefined si Heroe no existe', () => { 
    const id = 10;
    const heroe = getHeroeById(id);

    expect( heroe).toBe(undefined)
   }) 
})