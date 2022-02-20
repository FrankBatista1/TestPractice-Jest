import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("PrimeraApp test", () => {
  test("debe mostrar <PrimeraApp/> correctamente", () => {
    const saludo = "Hola, soy goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });
  test("debe tener un subtitulo enviado por props", () => {
    const saludo = "Hola, soy Goku";
    const subtitulo = 'Soy un subtitulo'

    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

    const textoParrafo = wrapper.find('p').text().trim();

    expect(textoParrafo).toBe(subtitulo)
  });
});
