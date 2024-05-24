import { defineStore } from "pinia";
import { getCategoryQuery } from "@api/category";
import { useCityStore } from "./useCityStore";

export const useCategoryStore = defineStore("category", {
	state: () => ({ category: [] }),
	getters: {
		cityStore() {
			return useCityStore();
		},
	},
	actions: {
		async getCategory() {
			let { data } = await getCategoryQuery(this.cityStore.id);
			this.category = data.tags;
		},
	},
});
