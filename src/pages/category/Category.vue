<template>
	<section
		v-if="!productStore.isPending && !categoryStore.isPending"
		class="slug"
	>
		<div class="container">
			<div class="slug__top">
				<RouterLink
					to="/"
					@click="productStore.products = []"
					class="slug__back"
				>
					<img
						src="/images/back-arrow.svg"
						alt="back"
					/>
				</RouterLink>

				<h2 class="slug__title title">{{ categoryStore.currentCategory?.name }}</h2>
			</div>
			<div class="slug__content">
				<aside
					v-if="categoryStore.currentCategory?.children?.length > 1"
					class="slug__subcategories"
				>
					<RouterLink
						:to="`/category/${$route.params.slug}`"
						:class="{ active: !productStore.filter }"
						@click.prevent="productStore.filter = ''"
						class="slug__subcategory"
					>
						Все продукты
					</RouterLink>
					<RouterLink
						:to="`/category/${$route.params.slug}/${subcategory.slug}`"
						:class="{ active: productStore.filter == subcategory.slug }"
						@click.prevent="productStore.filter = subcategory.slug"
						v-for="subcategory in categoryStore.currentCategory?.children"
						class="slug__subcategory"
					>
						{{ subcategory?.name }}
					</RouterLink>
				</aside>
				<Products />
			</div>
		</div>
	</section>
	<Loading v-else />
</template>

<script>
	import { mapStores, mapState } from "pinia";
	import { useCategoryStore } from "@stores/useCategoryStore";
	import { useProductStore } from "@stores/useProductStore";
	import { useCityStore } from "@stores/useCityStore.js";
	import Products from "./components/Products.vue";
	import Loading from "@ui/Loading.vue";

	export default {
		components: { Products, Loading },
		computed: {
			...mapStores(useCategoryStore, useProductStore),
			...mapState(useCityStore, ["city"]),
		},
		watch: {
			city: {
				handler(value) {
					this.categoryStore.getCategory();
				},
			},
		},
	};
</script>

<style scoped>
	.slug {
		padding-bottom: 12.125rem;
	}
	.slug__top {
		display: flex;
		gap: 0.625rem;
		align-items: center;
		margin-bottom: 1.25rem;
	}
	.slug__back {
		min-width: 1.875rem;
		height: 1.875rem;
		background-color: #030303;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 100%;
	}
	.slug__content {
		display: flex;
		gap: 2.125rem;
		@media (max-width: 1024px) {
			flex-direction: column;
		}
	}
	.slug__subcategories {
		max-width: 15rem;
		width: 100%;
		@media (max-width: 1024px) {
			max-width: 100%;
			display: flex;
			justify-content: space-between;
		}
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}
	.slug__subcategory {
		display: block;
		padding: 0.5rem 0.75rem;
		border-bottom: 0.0625rem solid #e9eef3;
		font-size: 1rem;
		line-height: 1.5rem;
		color: #202648;
		cursor: pointer;
		transition: all 0.3s ease;
		&:hover {
			background-color: #e6ecf1;
		}
		&.active {
			background-color: #e9eef3;
		}
	}
</style>
