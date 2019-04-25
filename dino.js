class dino{
	constructor (img, x, y, w, h) {
	this.img    = img
	this.x      = x
	this.y      = y
	this.w      = w
	this.h      = h
	this.index  = 0
	this.speedY = 0
	this.speed  = 1
	this.tierra = true
	this.gravedad = 0.29
}
	draw() {

		image(this.img[floor(this.index) % 21], this.x, this.y, this.w, this.h)
		this.index += this.speed
	}

	jump(gr) {

		this.speedY = -(this.w * gr) 
	}
	move(piso) {

	let toca = this.y + this.w // píxel inferior del perro
	let calcularAbajo = toca + this.speedY

  if (toca <= piso && calcularAbajo >= piso) { 

		this.speedY = 0 //resetea la velocidad
		this.y = piso - this.w // valida que no se pase mas alla del piso
		this.tierra = true
  } else if (piso - toca > 1) { // en ninguna parte cerca de la plataforma

		this.speedY += this.speed// incrementa la velocidad	
		this.tierra = false
  }

	//movimiento
	this.y += this.speedY
}
	
}