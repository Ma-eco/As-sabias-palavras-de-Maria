let palavra

function setup() {

  createCanvas(400, 400);
   
  palavra = palavraAleatoria ();
  
  }

function palavraAleatoria () {

  let palavras = ["Maria", "Gato", "Música"];
  
  return random(palavras);
  
}

function inicializaCores() {

   background ("white ");
  
   fill("black");
   
   textSize(64);

   textAlign(CENTER, CENTER);
    
  }

function palavraParcial(minimo, maximo) {

  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);

  let parcial = palavra.substring(0, quantidade);

  return parcial;

}

function draw() {

  inicializaCores();

  let outro = palavraParcial(0, width);

  text(outro, 200, 200);

}

