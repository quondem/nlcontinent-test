import axios from "axios";

export function getProductsQuery(slug, city_id) {
	return axios.get(`/api/menutags/${slug}`, { params: { city_id } });
}
