export function debounce(fn, ms) {
	let timeout;
	console.log(1);
	return function () {
		const fnCall = () => {
			fn.apply(this, arguments);
		};
		clearTimeout(timeout);
		timeout = setTimeout(fnCall, ms);
	};
}