import { createMemoryHistory, createRouter } from "vue-router";

import Category from "@pages/category/Category.vue";

const routes = [{ path: "/", component: Category }];

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
});
