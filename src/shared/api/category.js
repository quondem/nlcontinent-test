import axiosInstance from "./instance";

export function getCategoryQuery(city_id) {
	return axiosInstance.get("/api/menutags", { params: { city_id } });
}
