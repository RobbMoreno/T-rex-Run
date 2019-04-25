class volador{

constructor(img, x, y, w, h,size){
		this.img   = img
		this.x     = x
		this.y     = y
		this.w     = w
		this.h     = h
		this.speed = -2
		this.size = size
		this.screen = true
	}
	draw() {
		image(this.img, this.x, this.y, this.w, this.h)
	}

	move(speed) {

	 //comprueba si sale de la pantalla 
	this.screen = (this.x > -this.size)

	
	this.x -= speed
}

//colisiones
	hit(dino) {

		var halfSize = this.size * .5
		var distancia = halfSize + (dino.w - 30) // checa si esta cerquita de el cactus

		//buscara las cordenadas centrales 
		var xCenter = this.x + halfSize
		var yCenter = this.y + halfSize

		var distance = dist(xCenter, yCenter, dino.x, dino.y) // esto calcula la distancia del centro

		return (distance < distancia) 
}
}