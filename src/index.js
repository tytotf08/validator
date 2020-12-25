import check from "./checker.js";
(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : this).validator = function v(c, fn) {
	const value = typeof c === "function" ? c() : c;
	check(c, fn);
	return value;
};