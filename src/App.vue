<script>
	import Header from "@widgets/Header.vue";
	import { mapActions, mapStores, mapState } from "pinia";
	import { useCityStore } from "@stores/useCityStore";
	import { RouterView } from "vue-router";
	import { useCategoryStore } from "@stores/useCategoryStore";

	export default {
		components: {
			Header,
		},
		computed: {
			...mapStores(useCategoryStore),
			...mapState(useCityStore, ["isOpen"]),
		},
		methods: {
			...mapActions(useCityStore, ["loadCity"]),
		},
		mounted() {
			this.loadCity();
			this.categoryStore.category?.length <= 0 ? this.categoryStore.getCategory() : 0;
		},
		watch: {
			isOpen: {
				handler(newValue) {
					if (newValue) {
						document.body.style.overflow = "hidden";
					} else {
						document.body.style.overflow = "auto";
					}
				},
			},
		},
	};
</script>

<template>
	<div class="layout">
		<Header></Header>
		<router-view :key="$route.path" />
	</div>
</template>

<style scoped>
	.layout {
		padding-top: 6.6875rem;
	}
</style>
