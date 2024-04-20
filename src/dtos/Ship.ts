import {Cell} from './Cell';

enum Orientation{
	horizontal = "HORIZONTAL",
	vertical = "VERTICAL"
}

export class Ship{

	public cells: Cell[];
	public length: number;
	public orientation: Orientation;

	constructor(cells: Cell[]) {
		this.cells = cells;
		this.length = cells.length;

		const orientation = this.getOrientation(cells);
		if(! orientation){
			throw new Error();
		}

		this.orientation = orientation;

	}

	private getOrientation(cells: Cell[]): false | Orientation{
		let x = cells[0].x;
		let y = cells[0].y;
		let isX = false;
		let isY = false;

		cells.forEach(cell => {
			if(cell.x !== x) {
				isX = true;
				x = cell.x;
			}

			if(cell.y !== y){
				isY = true;
				y = cell.y;
			}
		})

		if(isX && isY) {
			return false;
		}

		return isX ? Orientation.horizontal : Orientation.vertical;
	}
}