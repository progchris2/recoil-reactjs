import { atom } from "recoil";

export const tasksState = atom({
	key: 'tasks-state',
	default: []
});