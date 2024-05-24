<script>
import { mapStores } from "pinia";
import { useCategoryStore } from "@stores/useCategoryStore";

export default {
	computed: {
		...mapStores(useCategoryStore),
	},
	mounted() {
		this.categoryStore.getCategory();
	},
};
</script>

<template>
	<div class="container">
		<h2 class="category__title">Категории товаров</h2>
		<div class="category__cards">
			<div
				v-for="tag in this.categoryStore?.category"
				class="category__card">
				<p class="category__card-title">{{ tag.name }}</p>
				<img
					:src="tag.image"
					alt=""
					class="category__card-bg" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.category__cards {
	display: flex;
	flex-wrap: wrap;
	gap: 1.375rem;
}
.category__card {
	max-width: 16.9375rem;
	width: 100%;
	border-radius: 0.3125rem;
}
</style>
