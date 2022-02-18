test("deben ser dos strings iguales", () => {
  // 1. inicializacion
  const mensaje1 =  'Hola mundo';
  // 2. estimulo 
  const mensaje2 = 'Hola mundo';
  // 3. observar el comportamiento
  expect(mensaje1).toBe(mensaje2)
});
