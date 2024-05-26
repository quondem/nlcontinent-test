<script>
	import Header from "@widgets/Header.vue";
	import { mapActions } from "pinia";
	import { useCityStore } from "@stores/useCityStore";
	import { RouterView } from "vue-router";

	export default {
		components: {
			Header,
		},
		methods: {
			...mapActions(useCityStore, ["loadCityId"]),
		},
		mounted() {
			this.loadCityId();
		},
	};
</script>

<template>
	<Header></Header>
	<RouterView />
</template>

<style scoped></style>
