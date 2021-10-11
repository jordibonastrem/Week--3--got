import Personaje from "./Personajes";

class Luchador extends Personaje {
  constructor(nombre, familia, estado, tipoArma, destreza) {
    super(nombre, familia, estado);
  }

  comunicar() {
    return "Primero pego y luego pregunto";
  }
}
