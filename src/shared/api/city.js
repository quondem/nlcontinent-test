import axiosInstance from "./instance";

export function getCityQuery(id) {
	return axiosInstance.get("/api/city", { params: { id } });
}

export function findCityQuery(term) {
	return axiosInstance.get("/api/city", { params: { term, country: "ru" } });
}
