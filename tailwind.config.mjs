import animations from 'tailwindcss-animated'
import postcss from 'postcss';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'morphosis': ['Blanka']
		  }
	},
	plugins: [animations],
}
