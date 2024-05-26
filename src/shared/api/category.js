import axiosInstance from "./instance";

export function getCategoryQuery(city_id) {
	console.log(1);
	return axiosInstance.get("/api/menutags", { params: { city_id } });
}
