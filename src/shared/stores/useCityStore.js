import { defineStore } from "pinia";
import { getCityQuery, findCityQuery } from "@api/city";

export const useCityStore = defineStore("city", {
	state: () => ({ term: "", city: {}, isOpen: false, suggestions: [], choosenSuggestion: null }),
	getters: {
		isValidChoosen() {
			return this.choosenSuggestion?.label == this.term;
		},
	},
	actions: {
		async loadCity() {
			let localCity = await JSON.parse(localStorage.getItem("city"));
			if (localCity) {
				this.city = localCity;
			} else {
				this.chooseCityById(1);
			}
		},
		resetTerm() {
			this.term = "";
			this.choosenSuggestion = null;
		},
		async chooseSuggestion(city) {
			this.choosenSuggestion = city;
			this.term = city.label;
			this.suggestions = [];
		},
		async chooseCityById(id) {
			let { data } = await getCityQuery(id);
			this.city = data.data;
			console.log(this.city);
			localStorage.setItem("city", JSON.stringify(data));
		},
		async chooseCity(city) {
			this.city = city;
			localStorage.setItem("city", JSON.stringify(city));
			this.resetTerm();
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
