import axios from "axios";

export const useCategoryStore = defineStore("category", {
	state: () => ({ categories: [] }),
	getters: {},
	actions: {
		getCategories: async () => {
			const { data } = await axios.get("/menutags");
			this.categories = data;
			console.log(useGlobalStore.categories);
		},
	},
});
