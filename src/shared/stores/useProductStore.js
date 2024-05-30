import { defineStore } from "pinia";
import { getProductsQuery } from "@api/products";
import { useCityStore } from "./useCityStore";

export const useProductStore = defineStore("product", {
	state: () => ({ products: null, slug: "", filter: "", isPending: false }),
	getters: {
		cityStore() {
			return useCityStore();
		},
		filteredProducts() {
			return this.products?.filter(product => {
				if (!this.filter) return true;
				return product.tags?.find(tag => tag.slug.includes(this.filter));
			});
		},
	},
	actions: {
		async getProducts() {
			this.category = [];
			this.isPending = true;
			let { data } = await getProductsQuery(this.slug, this.cityStore.city?.id);
			this.isPending = false;
			data?.products?.length >= 0 ? (this.products = data?.products) : (this.products = null);
		},
	},
});
