<template>
	<div class="category__card">
		<p
			:color="textColor"
			class="category__card-title"
		>
			{{ name }}
		</p>
		<img
			:src="image"
			:alt="name"
			class="category__card-bg"
		/>
	</div>
</template>

<script>
	export default {
		props: {
			name: String,
			image: String,
			textColor: String,
		},
	};
</script>

<style scoped>
	.category__card {
		max-width: 16.9375rem;
		height: 9.5rem;
		width: 100%;
		border-radius: 0.3125rem;
		overflow: hidden;
		position: relative;
		cursor: pointer;
		transition: all 0.5s ease-in-out;
		&:hover {
			transform: scale(0.98);
			border: 0.3px solid black;
		}
	}
	.category__card-title {
		position: absolute;
		top: 1.25rem;
		left: 1.25rem;
		font-weight: 600;
		font-size: 1.5rem;
		line-height: 1.75rem;
	}
	.category__card-bg {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
