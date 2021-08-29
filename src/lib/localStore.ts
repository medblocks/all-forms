import { writable } from "svelte/store";

const key = "env"

function localStore() {
    const { subscribe, set } = writable(localStorage.getItem(key));
    return {
        subscribe,
        setLocal: (value: string) => {
            localStorage.setItem(key, value)
            set(value)
        }
    };
}

const store = localStore();

export { store, key }