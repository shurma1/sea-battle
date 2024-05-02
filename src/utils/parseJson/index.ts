
export const parseJson = (json: any): any => {
    try{
        const obj = JSON.parse(json);
        return obj;
    }
    catch{
        return false
    }
}