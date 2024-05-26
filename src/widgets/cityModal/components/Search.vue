<template>
	<div class="search">
		<input
			v-model="term"
			:class="{ search__input_suggestions: cityStore.suggestions.length > 0 }"
			placeholder="Например, Санкт-петербург"
			type="text"
			class="search__input"
		/>
		<div
			v-if="cityStore.suggestions.length > 0"
			class="search__suggestions"
		>
			<div
				v-for="suggestion in cityStore.suggestions"
				:key="suggestion"
				class="search__suggestion"
				@click="cityStore.chooseSuggestion(suggestion)"
			>
				{{ suggestion.label }}
			</div>
		</div>
		<button
			@click="cityStore.resetTerm"
			class="search__close"
		>
			<img
				src="/images/close.svg"
				alt="close"
			/>
		</button>
	</div>
</template>

<script>
	import { mapState, mapStores, mapWritableState } from "pinia";
	import { useCityStore } from "@stores/useCityStore.js";
	import { debounce } from "@utils/debounce";

	export default {
		computed: {
			...mapStores(useCityStore),
			...mapWritableState(useCityStore, ["term"]),
		},
		data() {
			return {
				debouncedFindCity: debounce(text => {
					this.cityStore.findCity(this.term);
				}, 300),
			};
		},
		watch: {
			term: {
				immediate: true,
				handler(newValue) {
					this.debouncedFindCity(newValue);
				},
			},
		},
	};
</script>

<style scoped>
	.search {
		max-width: 33.75rem;
		width: 100%;
		position: relative;
	}
	.search__input {
		width: 100%;
		padding: 0.75rem 2.5rem 0.75rem 0.75rem;
		border-radius: 0.3125rem;
		border: 1px solid rgba(151, 151, 151, 0.5);
		outline: none;
		font-size: 1.125rem;
		line-height: 1.4375rem;
		color: var(--black-gray);
		position: relative;
		transition: all 0.1s ease;
		&:focus {
			border: 1px solid var(--black-gray);
		}
	}
	.search__input_suggestions {
		&:focus {
			border: 1px solid var(--black-gray);
			border-bottom: 0;
			border-radius: 0.3125rem 0.3125rem 0 0;
		}
	}
	.search__input_suggestions:focus + .search__suggestions {
		opacity: 1;
	}
	.search__suggestions {
		transition: all 0.1s ease;
		opacity: 0;
		display: flex;
		flex-direction: column;
		gap: 0.4375rem;
		padding: 0.75rem;
		position: absolute;
		bottom: 0.1875rem;
		z-index: 13;
		left: 0;
		right: 0;
		transform: translateY(100%);
		width: 100%;
		background-color: #fff;
		font-size: 1.125rem;
		line-height: 1.5rem;
		color: var(--gray);
		border-left: 0.0625rem solid #272727;
		border-right: 0.0625rem solid #272727;
		border-bottom: 0.0625rem solid #272727;
		border-radius: 0 0 0.3125rem 0.3125rem;
		&::before {
			content: "";
			width: calc(100% - 2.5rem);
			height: 0.125rem;
			position: absolute;
			margin: 0 auto;
			top: 0;
			left: 0;
			right: 0;
			background: rgba(151, 151, 151, 0.3);
		}
	}
	.search__suggestion {
		&:hover {
			color: var(--black-gray);
			cursor: pointer;
		}
	}
	.search__close {
		position: absolute;
		top: 47%;
		transform: translateY(-50%);
		right: 0.9375rem;
		width: 0.75rem;
		height: 0.75rem;
		box-sizing: content-box;
		cursor: pointer;
		padding: 0.3125rem;
		background-color: transparent;
		& img {
			width: 100%;
		}
	}
</style>
