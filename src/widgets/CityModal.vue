<template>
	<div class="modal">
		<div class="modal__content">
			<button
				@click="log"
				class="modal__close"
			>
				<img
					src="/images/close.svg"
					alt="close"
				/>
			</button>
			<h2 class="modal__title"></h2>
			<div class="city"></div>
		</div>
	</div>
</template>

<script>
	import { mapStores } from "pinia";
	import { useCityStore } from "@store/useCityStore.js";

	export default {
		data() {
			return {};
		},
		methods: {
			log() {
				console.log(this.cityStore);
			},
		},
		computed: {
			...mapStores(useCityStore),
		},
	};
</script>

<style scoped>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #353647;
		opacity: 0.8;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}
	.modal__content {
		position: relative;
		max-width: 48.0625rem;
		width: 100%;
		padding: 1.75rem 1.125rem 2rem 1.125rem;
		background-color: #fff;
		box-shadow: 0 2px 10px 0 rgba(151, 151, 151, 0.2);
		border-radius: 0.3125rem;
	}
	.modal__close {
		position: absolute;
		top: 1.125rem;
		right: 1.125rem;
		width: 1rem;
		height: 1rem;
		border: none;
		background-color: transparent;
	}
	.modal__title {
		color: var(--black-gray);
		font-weight: 600;
		font-size: 1.25rem;
		line-height: 1.5rem;
		margin-bottom: 0.75rem;
	}
	.city {
		display: flex;
		gap: 0.875rem;
		flex-direction: column;
	}
</style>
