import { writable } from "svelte/store";

export let menuStore = writable(false)
export let moduleStore = writable('')
export let moduleItemStore = writable('')
export let orderListStore = writable([])