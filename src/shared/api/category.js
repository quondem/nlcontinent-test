import axios from "axios";

export function getCategoryQuery(city_id) {
	return axios.get("/api/menutags", { city_id });
}
