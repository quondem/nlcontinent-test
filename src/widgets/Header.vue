<template>
	<div class="header">
		<div class="container">
			<div class="header__wrapper">
				<div class="header__city">
					<img
						src="/images/destination.svg"
						alt="destination"
					/>
					<div class="header__city-text">Москва</div>
				</div>
			</div>
		</div>
		<CityModal></CityModal>
	</div>
</template>

<script>
	import CityModal from "@widgets/CityModal.vue";
	export default {
		components: {
			CityModal,
		},
	};
</script>

<style scoped>
	.header {
		height: 4.5rem;
		background-color: #fff;
		box-shadow: 0 2px 4px 0 rgba(39, 39, 39, 0.1);
		display: flex;
		align-items: center;
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
