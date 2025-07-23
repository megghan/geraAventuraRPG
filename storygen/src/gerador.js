const locais = [
  "ilha",
  "vila",
  "floresta encantada",
  "castelo abandonado",
  "deserto amaldiçoado",
  "ruínas submersas",
  "torre invertida",
  "cemitério antigo",
  "mercado interdimensional",
  "planície dos ossos",
  "cidade flutuante",
  "templo esquecido",
  "gruta de cristais",
  "cordilheira dos ventos uivantes",
  "pântano dos murmúrios"
];
const objetivos = [
  "roubar a pedra sagrada do Deus da Luz",
  "salvar o reino do dragão",
  "impedir a ascensão do necromante",
  "recuperar o artefato perdido",
  "descobrir a origem de um feitiço antigo",
  "curar a maldição do sangue",
  "selar um portal demoníaco",
  "reunir os fragmentos da alma de um deus",
  "salvar uma vila condenada pelo tempo",
  "restaurar a memória de um espírito ancestral",
  "forjar uma aliança entre raças em guerra",
  "libertar um ser preso em outra dimensão",
  "descobrir a verdade sobre a criação do mundo",
  "impedir um casamento profano",
  "proteger o último dragão bebê"
];

const complicacao = [
  "o dragão é a princesa!",
  "a pedra já foi roubada",
  "o aliado é um traidor",
  "o tempo está se repetindo",
  "alguém do grupo foi possuído",
  "a chave está escondida dentro de um inimigo",
  "a profecia é falsa",
  "o vilão é um parente do herói",
  "o local está se desfazendo no tempo",
  "a magia está instável",
  "a missão é uma armadilha",
  "o grupo está sendo vigiado por deuses",
  "os moradores são ilusões",
  "um juramento antigo impede o sucesso",
  "um dos personagens é um dos causadores do problema"
];

const nomes = [
  "Mirabel",
  "Thorne",
  "Eldra",
  "Kael",
  "Lys",
  "Draven",
  "Selene",
  "Orrin",
  "Nyra",
  "Falkor",
  "Vex",
  "Ysolde",
  "Riven",
  "Iskra",
  "Branwen"
];

const aparencias = [
  "cabelos prateados e olhos como a noite",
  "cicatriz atravessando o rosto e um olhar intenso",
  "manto esfarrapado com cheiro de incenso",
  "pele dourada e tatuagens místicas",
  "olhar que parece atravessar a alma",
  "asas de penas negras que se movem sozinhas",
  "voz que soa como um eco distante",
  "olhos brilhantes como brasas",
  "pele marcada por runas vivas",
  "mãos cobertas de tinta mágica",
  "riso que arrepia até os mortos",
  "cabelos flutuantes mesmo sem vento",
  "couraça feita de ossos encantados",
  "joias que sussurram segredos",
  "um colar com um olho que pisca sozinho"
];


function gerarNPC(envol) {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const aparencia = aparencias[Math.floor(Math.random() * aparencias.length)];
  return `${nome}, aparência: ${aparencia}, envolvid@ com ${envol}`;
}

export function gerarAventura() {
  const local = locais[Math.floor(Math.random() * locais.length)];
  const objetivo = objetivos[Math.floor(Math.random() * objetivos.length)];
  const complic = complicacao[Math.floor(Math.random() * complicacao.length)];

  const listaEnvolvimentos = [local, objetivo, complic];
  

  const npc1 = gerarNPC(listaEnvolvimentos[Math.floor(Math.random() * listaEnvolvimentos.length)]);
  const npc2 = gerarNPC(listaEnvolvimentos[Math.floor(Math.random() * listaEnvolvimentos.length)]);

  const aventura = `A aventura acontece em ${local}, o objetivo é ${objetivo}, mas há um problema: ${complic}.`;

  return { aventura, npc1, npc2 };
}

