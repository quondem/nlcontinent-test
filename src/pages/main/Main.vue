<template>
	<section
		v-if="!categoryStore.isPending"
		class="category"
	>
		<div class="container">
			<h2 class="category__title title">Категории товаров</h2>
			<div class="category__cards">
				<Card
					@click="productStore.products = null"
					v-for="tag in this.categoryStore?.category"
					:name="tag.name"
					:image="tag.image"
					:textColor="tag.text_color"
					:to="`/category/${tag.slug}`"
				/>
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
	import Card from "./components/Card.vue";
	import Loading from "@ui/Loading.vue";

	export default {
		components: { Card, Loading },
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
	.category {
		padding-bottom: 11rem;
	}
	.category__title {
		margin-bottom: 1.25rem;
	}
	.category__cards {
		display: flex;
		flex-wrap: wrap;
		gap: 1.375rem;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
