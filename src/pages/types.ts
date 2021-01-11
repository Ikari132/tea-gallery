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