import type { ITeaGroup } from "./../routes/types";
import { readable } from "svelte/store";
import tea from "./tea_small.json";

let galleryStore = readable<ITeaGroup[] | []>([], function start(set) {
    set(tea as any);
    return function stop() {
    };
});

export { galleryStore }