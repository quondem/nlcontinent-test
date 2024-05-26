import axiosInstance from "./instance";

export function getProductsQuery(slug, city_id) {
	return axiosInstance.get(`/api/menutags/${slug}`, { params: { city_id } });
}
