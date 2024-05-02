import {Ship} from "../types/GameField";
import {CellDTO} from "../dtos/Cell";

class GameFieldService {

    public verify (ships: CellDTO[][]) {

        const shipsCount = [0, 0, 0, 0];

        const cellsCount = new Set<number>();

        for (let i = 0; i < ships.length; i++) {

            if(ships[i].length > 4 || ships[i].length < 1) {
                return false;
            }

            const x = new Set<number>();
            const y = new Set<number>();

            for (let j = 0; j < ships[i].length; j++) {

                const cell = ships[i][j];

                if(cell.y < 0 || cell.x < 0 || cell.x > 9 || cell.y > 9) {
                    return false;
                }

                x.add(cell.x);
                y.add(cell.y);
                cellsCount.add((parseInt(`${cell.x}${cell.y}`)));

                if(i+1 >= ships.length){
                    continue
                }

                for (let a = i + 1; a < ships.length; a++) {
                    for(let b = 0; b < ships[a].length; b++) {
                        const anotherCell = ships[a][b];

                        if(
                            //center col
                            anotherCell.x === cell.x && anotherCell.y === cell.y
                            || anotherCell.x === cell.x && anotherCell.y === cell.y + 1
                            || anotherCell.x === cell.x && anotherCell.y === cell.y - 1
                            //left col
                            || anotherCell.x === cell.x - 1 && anotherCell.y === cell.y
                            || anotherCell.x === cell.x - 1 && anotherCell.y === cell.y + 1
                            || anotherCell.x === cell.x - 1 && anotherCell.y === cell.y - 1
                            //right col
                            || anotherCell.x === cell.x + 1 && anotherCell.y === cell.y
                            || anotherCell.x === cell.x + 1 && anotherCell.y === cell.y + 1
                            || anotherCell.x === cell.x + 1 && anotherCell.y === cell.y - 1
                        ) {
                            return false;
                        }
                    }
                }
            }


            if(! ((x.size === 1 && y.size === ships[i].length) || (y.size === 1 && x.size === ships[i].length))){
                return false;
            }

            shipsCount[ships[i].length - 1] += 1;
        }

        return !(
            shipsCount[0] !== 4
            || shipsCount[1] !== 3
            || shipsCount[2] !== 2
            || shipsCount[3] !== 1
        );
    }

}

export default new GameFieldService();