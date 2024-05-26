<template>
	<div class="container">
		<h2 class="category__title title">Категории товаров</h2>
		<div class="category__cards">
			<Card
				v-for="tag in this.categoryStore?.category"
				:name="tag.name"
				:image="tag.image"
				:textColor="tag.text_color"
			/>
		</div>
	</div>
</template>

<script>
	import { mapStores } from "pinia";
	import { useCategoryStore } from "@stores/useCategoryStore";
	import Card from "./components/Card.vue";

	export default {
		components: { Card },
		computed: {
			...mapStores(useCategoryStore),
		},
		mounted() {
			this.categoryStore.getCategory();
		},
	};
</script>

<style scoped>
	.category__cards {
		display: flex;
		flex-wrap: wrap;
		gap: 1.375rem;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
