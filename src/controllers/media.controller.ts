import {NextFunction, Request, Response} from "express";
import path from "node:path";
import {ROOT_DIR} from "../../index";
import * as fs from "node:fs";



class MediaController {

    async get(req: Request, res: Response, next: NextFunction) {

        const {type, name} = req.query;

        if(
            ! type
            || !name
        ) {
            return res.status(400)
                .send(
                    {error: "Invalid request"}
                )
        }

        let extension = type === 'avatar' ? 'svg' : 'json';

        const pathToFile = path.resolve(ROOT_DIR, 'assets', type as string, `${name as string}.${extension}`)

        const isFileExists = fs.existsSync(pathToFile);

        if(!isFileExists) {
            return res.status(400)
                .send(
                    {error: "Invalid request"}
                )
        }

        return res.sendFile(pathToFile);
    }

}


export default new MediaController();