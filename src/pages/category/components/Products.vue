<template>
	<div
		v-if="!productStore.isPending && !categoryStore.isPending"
		class="products"
	>
		<div
			v-for="product in productStore.filteredProducts"
			class="product"
		>
			<img
				:src="product.main_image_thumb_300"
				:alt="product.present_name"
			/>
			<p class="product__category">{{ product.category.name }}</p>
			<h4 class="product__name">{{ product.present_name }}</h4>
			<p
				v-if="product.comment_name"
				class="product__comment"
			>
				{{ product.comment_name }}
			</p>
			<p class="product__price">{{ convertCurrency(product.price) }}</p>
			<Button
				:disabled="!product.allowed || !product.available"
				class="product__button"
				>{{ product.allowed || product.available ? "В корзину" : "Нет в наличии" }}</Button
			>
		</div>
	</div>
	<Loading v-else />
</template>

<script>
	import { mapStores, mapState } from "pinia";
	import { useCategoryStore } from "@stores/useCategoryStore";
	import { useProductStore } from "@stores/useProductStore";
	import { useCityStore } from "@stores/useCityStore.js";
	import Loading from "@ui/Loading.vue";
	import Button from "@ui/Button.vue";
	export default {
		components: {
			Button,
			Loading,
		},
		computed: {
			...mapStores(useCategoryStore, useProductStore),
			...mapState(useCityStore, ["city"]),
		},
		methods: {
			convertCurrency(amount) {
				return new Intl.NumberFormat("ru-RU", {
					style: "currency",
					currency: "RUB",
					maximumFractionDigits: 0,
				}).format(+amount);
			},
		},
		watch: {
			city: {
				handler() {
					this.productStore.getProducts();
				},
			},
		},
		mounted() {
			this.productStore.slug = this.$route.params?.slug;
			this.productStore.filter = this.$route.params?.subcategorySlug;
			if (this.productStore.products.length == 0) {
				this.productStore.getProducts();
			}
		},
	};
</script>

<style scoped>
	.products {
		display: flex;
		justify-content: space-evenly;
		gap: 1.5rem;
		flex-wrap: wrap;
	}
	.product {
		max-width: 17.25rem;
		width: 100%;
		box-shadow: 0 2px 10px 0 rgba(151, 151, 151, 0.2);
		background: #fff;
		border-radius: 0 0 5px 5px;
		display: flex;
		align-items: center;
		flex-direction: column;
		text-align: center;
		padding: 0 1.25rem 1.125rem 1.25rem;
		& img {
			width: 100%;
		}
	}
	.product__category {
		color: var(--gray);
		font-size: 0.875rem;
		line-height: 0.875rem;
		margin-bottom: 0.25rem;
	}
	.product__name {
		font-size: 1.25rem;
		line-height: 1.5rem;
		color: var(--black-gray);
		margin-bottom: 0.5625rem;
	}
	.product__comment {
		font-size: 1rem;
		line-height: 1.25rem;
		line-height: 1.25;
		color: var(--black-gray);
		margin-bottom: 0.875rem;
	}
	.product__price {
		font-weight: 600;
		font-size: 1.625rem;
		line-height: 1.5rem;
		color: var(--black-gray);
		margin-bottom: 1rem;
	}
	.product__button {
		max-width: 13.25rem;
		width: 100%;
		padding: 0.375rem 0;
		margin-top: auto;
		font-weight: 600;
		font-size: 1.125rem;
		line-height: 1.5rem;
		min-height: 2.5rem;
	}
</style>
