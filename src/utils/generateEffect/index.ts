import {ROOT_DIR} from "../../../index";
import path from "node:path";
import * as fs from "node:fs";


export const generateEffect = () => {
    const effectsFolder = path.resolve(ROOT_DIR, 'assets', 'effects');

    const effects = fs.readdirSync(effectsFolder);

    const a = Math.floor(Math.random() * effects.length-1);

    const effect = effects[a];

    return effect.replace('.json', '');
}