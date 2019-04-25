let horizon
let velocidadObs
let perrito                = []
const perritoImagenArreglo = []
let cact1
let cact2
let prroImg
let prro
let score
let scoreAnt
let obstaculos             = []
let obstaculosArriba       = []
let cactusChico
let cactusGrande
let rex
let ground
let bg
let dragon
let size
let texto
let texto2
const parallaxBg           = []
function preload(){
	ground       = loadImage('image/Tiles/tile2.png')
	bg           = loadImage('image/eternal-ice-flattened.png')
	cactusChico  = loadImage('image/cactus1.png')
	cactusGrande = loadImage('image/nk.png')
	dragon       = loadImage('image/dragon.png')
	texto        = loadImage('image/generatedtext.png')
	texto2       = loadImage('image/gameover.png')
}

function setup() {
	size = 30
  	createCanvas(windowWidth, windowHeight);
	/*for(let i = 0; i < 2; i++){
		let p = new parallaxs(bg, i * width, 0, width, height, 0.6)
		parallaxBg.push(p)
	}*/
	for(let i = 0; i <2; i++){
		parallaxBg.push(new parallaxs(bg, i*width, 0, width, height))
	}
	for(let i = 0; i < 2; i++){
		parallaxBg.push(new parallaxs(ground, i*width, height -42, width, 100))

	}
 	textAlign(CENTER);

  	horizon = height - 40;

	score        = 0
	scoreAnt     = 0
	velocidadObs = 6;

	//cact1  = new obstaculo(cactusChico, width + size, horizon - 55, 90, 60, size)
	//obstaculos.push(cact1)

	for(let i = 0 ; i < 21; i++){

		prroImg = loadImage(`image/run/rr_0${i}.png`) 
		perrito.push(prroImg)
	}
	
  textSize(20);

	rex = new dino(perrito, size * 2, height - horizon, 60, 60);
	perritoImagenArreglo.push(rex)
}

function draw() {
  //background('#656565');
  	background('white')

	drawPaisajeScore()

	manejaNivel(frameCount)

	rex.move(horizon)
	movimiento()
	pintaObs()
	image(texto, width * .05, 10, 400, 50)
  	//manejaObstaculos();
}

function drawPaisajeScore() {

	for(let p of parallaxBg){
		p.draw()
		p.move()
	}
	//text("Perrito", width * .1, 30)
	text("Hi: " + scoreAnt, width *.4, 30)
  	text("Hi: " + score, width * .5, 30);

	for(let p of perritoImagenArreglo){
		p.draw();
	}
	
}
function pintaObs(){
	for(let ob of obstaculos){
		ob.move(velocidadObs)
		ob.draw()

		if (ob.hit(rex)){
			finDelJuego()
			scoreAnt == score
		}


	}
	for(let v of obstaculosArriba){
		v.move(velocidadObs)
		v.draw()

		if (v.hit(rex)) 
			finDelJuego()

	}
}

function manejaNivel(n) {

  if (n % 70 == 0) { 

    let ran = random(n)

    if (ran > 2)
      creaNuevoObstaculo()

	  if (ran % 120 == 0) 
	    velocidadObs *= 1
  }

	score++
}

function creaNuevoObstaculo() {

	let size = random(30) + 20;
	let sizeD = random(200, 300)
  	let obs = new obstaculo(cactusGrande, width + size, horizon - 80, 90, 80, size)
  	let obNivelhard = new obstaculo(cactusGrande, width + size, horizon - 210, 90, 200, size)
  	let obsUp = new volador(dragon, width - 100, horizon - sizeD, 100, 60, size)
  	obstaculos.push(obs);


  	if (score >= 600)
  		obstaculosArriba.push(obsUp)

  	if (score >= 1200)
  		obstaculos.push(obNivelhard) 
  	console.log("score"+score)
}

function movimiento() {

	if (score <= 1200) {
		if (keyIsDown(32) && rex.tierra)
			rex.jump(.29)
	}else{
		if (keyIsDown(32) && rex.tierra)
			rex.jump(.40)
	}
	
		
}

function finDelJuego() {

	noLoop()
	image(texto2, 300, 200, 700, 70)
}