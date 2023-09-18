/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
			mono: ["CascadiaCode"],
		},
		gridTemplateColumns: {
			cards: "repeat(auto-fit, minmax(300px, 1fr))",
		},
	},
	plugins: [],
};
