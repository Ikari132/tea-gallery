export type TBrewingMethod = "gaiwan" | "teapot";

export interface ITea {
    name: string;
    otherName?: string;
    time: number;
    temperature: number;
    method: TBrewingMethod[];
    rating: number;
    description: string;
    price: string;
    tags: string[];
    inStock: boolean;
}
export type ITeaType =
    "GREEN" |
    "RED" |
    "WHITE" |
    "JAPANESE" |
    "SHU" |
    "SHEN" |
    "OOLONG" |
    "OTHERS" |
    "MATE" |
    "BLACK";

export interface ITeaGroup {
    type: ITeaType;
    list: ITea[];
}