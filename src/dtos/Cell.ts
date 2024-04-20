

export class Cell {
	x: number;
	y: number;
	hit: boolean = false;
	shot: boolean = false;

	constructor(x: number, y:number) {
		this.x = x;
		this.y = y;
	}

	public Hit(){
		this.hit = true;
	}

	public Shot(){
		this.hit = true;
	}

}