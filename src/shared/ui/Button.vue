<template>
	<button class="button"><slot /></button>
</template>

<script>
	export default {
		props: {},
	};
</script>

<style scoped>
	.button {
		padding: 0.8125rem 1.5rem;
		border-radius: 1.5rem;
		font-weight: 600;
		text-transform: uppercase;
		background: linear-gradient(270deg, #ffa800 0%, #ff6f00 100%);
		color: #fff;
		transform: all 0.2s ease;
		&:disabled {
			color: #acacac;
			background-color: transparent;
			pointer-events: none;
			border: 0.125rem solid rgba(151, 151, 151, 0.3);
		}
	}
</style>
