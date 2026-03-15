/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
			},
			colors: {
				brand: {
					50: '#f0fdf9',
					100: '#d5f5ec',
					200: '#a8ebd7',
					300: '#6dd8bb',
					400: '#38be9c',
					500: '#1a9f82',
					600: '#0f7f6a',
					700: '#0e6656',
					800: '#105146',
					900: '#11433b',
				},
				warm: {
					50: '#fdfaf6',
					100: '#f5efe6',
					200: '#ede3d3',
				},
			},
		},
	},
	plugins: [],
}
