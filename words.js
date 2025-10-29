const words = [
  { word: "Bugatti", clue: "carro recordista de velocidade" },
  { word: "chimpanze", clue: "animal capaz de realizar taticas de caça" },
  { word: "notebook", clue: "Dispositivo eletrônico" },
  { word: "BYD", clue: "carro capaz de pular e dançar" },
  { word: "kawasaki", clue: "marca de motos famosa" },
  { word: "guitarra", clue: "Instrumento musical com cordas" },
  { word: "cheeta", clue: "felino mais rápido do planeta" },
  { word: "Ford", clue: "marca que ganhou da Ferrari em, LeMans" },
  { word: "titanic", clue: "Embarcação famosa que afundou" },
  { word: "Rádio", clue: "Dispositivo de comunicação" },
  { word: "subaru", clue: "uma das maiores vencedoras de rally" },
  { word: "cigarro", clue: "da câncer" },
  { word: "foguete", clue: "Veículo espacial" },
  { word: "viniciusjr", clue: "namorado da virginia" },
  { word: "mclarenf1", clue: "Veículo aspirado mais rápido do mundo" },
  { word: "avião", clue: "Meio de transporte aéreo" },
  { word: "Russia", clue: "maior país do mundo" },
  { word: "raios", clue: "Descargas elétricas na atmosfera" },
  { word: "montanha", clue: "Elevação natural da terra" },
  { word: "Ayrton Senna", clue: "O melhor piloto de f1 de todos os tempos" },
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}

