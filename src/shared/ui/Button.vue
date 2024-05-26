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
		z-index: 1;
		border-radius: 1.5rem;
		font-weight: 600;
		text-transform: uppercase;
		background: linear-gradient(270deg, #ffa800 0%, #ff6f00 100%);
		color: #fff;
		transform: all 0.2s ease;
		position: relative;
		&:disabled {
			color: #acacac;
			background: transparent;
			pointer-events: none;
			border: 0.125rem solid rgba(151, 151, 151, 0.3);
			&::before {
				opacity: 0;
			}
		}
		&::before {
			content: "";
			z-index: -1;
			opacity: 1;
			transition: all 0.2s ease;
			position: absolute;
			top: 0.5rem;
			left: 0.9375rem;
			height: 100%;
			width: calc(100% - 1.875rem);
			filter: blur(27.182817459106445px);
			background: linear-gradient(270deg, rgba(255, 168, 0, 0.6) 0%, rgba(255, 111, 0, 0.6) 100%);
		}
	}
</style>
