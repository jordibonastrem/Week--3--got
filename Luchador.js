import Personaje from "./Personajes";

class Luchador extends Personaje {
  constructor(nombre, familia, estado, tipoArma, destreza) {
    super(nombre, familia, estado);
  }

  comunicar() {
    return super.comunicar() + " primero pego y luego pregunto";
  }
}
