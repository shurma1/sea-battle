import {CellDTO} from "../dtos/Cell";


export default class CellModel extends CellDTO{
    constructor(x: number, y:number) {
        super(x, y);
    }

    public Hit(){
        this.hit = true;
    }

    public Shot(){
        this.hit = true;
    }

}