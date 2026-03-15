/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
			},
			colors: {
				olive: {
					50: '#f6f7f4',
					100: '#e8ebe2',
					200: '#d4d9c8',
					300: '#b5bea1',
					400: '#97a37d',
					500: '#7a8a60',
					600: '#5f6d4a',
					700: '#4a563b',
					800: '#3d4632',
					900: '#343c2c',
				},
			},
			letterSpacing: {
				'tightest': '-0.04em',
			},
		},
	},
	plugins: [],
}
