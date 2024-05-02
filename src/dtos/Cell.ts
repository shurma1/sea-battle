import {Cell} from "../types/Cell";


export class CellDTO implements Cell {
	x: number;
	y: number;
	hit: boolean = false;
	shot: boolean = false;

	constructor(x: number, y:number) {
		this.x = x;
		this.y = y;
	}
}