import { defineStore } from "pinia";
import { getCityQuery, findCityQuery } from "@api/city";

export const useCityStore = defineStore("city", {
	state: () => ({ city: {}, isOpen: false, suggestions: [] }),
	getters: {},
	actions: {
		async loadCityId() {
			let localCity = localStorage.getItem("city");
			if (localCity) {
				this.city = localCity;
			} else {
				this.chooseCity(1);
			}
		},
		async chooseCity(id) {
			let { data } = await getCityQuery(id);
			this.city = data;
			localStorage.setItem("city", data);
		},
		async findCity(name) {
			if (name?.length > 2) {
				let { data } = await findCityQuery(name);
				this.suggestions = data?.data?.slice(0, 5);
			} else {
				this.suggestions = [];
			}
		},
	},
});
