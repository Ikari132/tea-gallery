import { readable } from "svelte/store";
import tea from "./tea_small.json";

let galleryStore = readable([], function start(set) {

    set(tea as any);
    return function stop() {
    };
});

export { galleryStore }