import { defineStore } from "pinia";
import { getCategoryQuery } from "@api/category";
import { useCityStore } from "./useCityStore";
import { useProductStore } from "./useProductStore";

export const useCategoryStore = defineStore("category", {
	state: () => ({ category: [], isPending: false }),
	getters: {
		cityStore() {
			return useCityStore();
		},
		productStore() {
			return useProductStore();
		},
		currentCategory() {
			return this.category.find(item => item.slug === this.productStore.slug);
		},
	},
	actions: {
		async getCategory() {
			this.category = [];
			this.isPending = true;
			let { data } = await getCategoryQuery(this.cityStore.city?.id);
			this.isPending = false;
			this.category = data?.tags;
		},
	},
});
