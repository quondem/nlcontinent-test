import axios from "axios";

export function getCityQuery(id) {
	return axios.get("/api/city", { params: { id } });
}

export function findCityQuery(term) {
	return axios.get("/api/city", { params: { term, country: "ru" } });
}
