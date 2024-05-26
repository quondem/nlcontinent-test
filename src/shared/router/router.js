import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Main from "@pages/main/Main.vue";
import Category from "@pages/category/Category.vue";
import PassThrough from "@ui/PassThrough.vue";

const routes = [
	{ path: "/", component: Main },
	{
		path: "/category",
		component: PassThrough,
		children: [
			{
				path: ":slug",
				component: Category,
			},
			{
				path: ":slug/:subcategorySlug",
				component: Category,
			},
		],
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
