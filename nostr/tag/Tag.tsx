import { a } from "./a";
import { e } from "./e";
import { p } from "./p";

export interface Tag { }

export function tagFromJsonObj(jsonObject: any): Tag | undefined {
    switch (jsonObject[0]) {
        case 'a':
            return new a(jsonObject[1], jsonObject[1])
        case 'e':
            return new e(jsonObject[1], jsonObject[1])
        case 'p':
            return new p(jsonObject[1], jsonObject[1])
        default:
            return undefined
    }
}

export function tagsFromJsonObjArray(jsonObjectArray: any): Array<Tag> | undefined {
    return jsonObjectArray.map((item) => tagFromJsonObj(item)).filter(item => item !== undefined);
}