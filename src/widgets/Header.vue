<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<div
					@click="cityStore.$patch({ isOpen: true })"
					class="header__city"
				>
					<img
						src="/images/destination.svg"
						alt="destination"
					/>
					<p class="header__city-text">Москва</p>
				</div>
			</div>
		</div>
		<CityModal v-if="cityStore.isOpen"></CityModal>
	</header>
</template>

<script>
	import { mapStores, mapState } from "pinia";
	import { useCityStore } from "@stores/useCityStore.js";
	import CityModal from "@widgets/cityModal/CityModal.vue";
	export default {
		components: {
			CityModal,
		},
		data() {
			return {};
		},
		computed: {
			...mapStores(useCityStore),
		},
		watch: {},
	};
</script>

<style scoped>
	.header {
		height: 4.5rem;
		background-color: #fff;
		box-shadow: 0 2px 4px 0 rgba(39, 39, 39, 0.1);
		display: flex;
		align-items: center;
		margin-bottom: 2.1875rem;
	}
	.header__wrapper {
		height: 100%;
		display: flex;
		align-items: center;
	}
	.header__city {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
	}
	.header__city-text {
		color: var(--black-gray);
		font-weight: 500;
		font-size: 0.9375rem;
		line-height: 1.5rem;
	}
</style>
