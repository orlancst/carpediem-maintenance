/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'fondo-carpediem': "url('/src/assets/img/fondo.jpg')",
			},
			fontFamily: {
				'open-sans': '"Open Sans", sans-serif',
				'gill-sans': '"Gill Sans", sans-serif',
				'gill-sans-medium': '"Gill Sans Medium", sans-serif',
				'gill-sans-bold': '"Gill Sans Bold", sans-serif',
				
			},
			listStyleType: {
				"marker-icon": 'url("/src/assets/img/marker.png")',
			},
		},
	},
	plugins: [],
}
