import Personaje from "./Personajes";

class Assesor extends Personaje {
  constructor(nombre, familia, estado, personajeAlQueAssesora) {
    super(nombre, familia, estado);
  }

  comunicar() {
    return super.comunicar() + " un assesor.";
  }
}
