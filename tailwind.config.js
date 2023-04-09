/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
		screens: {
			// 	// xs: { min: '300px', max: '425px' }, // Mobile (iPhone 3 - iPhone XS Max).
			// 	// sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
			// 	// md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
			// 	// lg: { min: '1200px', max: '1979px' }, // Desktop smallest.
			// 	// xl: { min: '1980px', max: '2879px' }, // Desktop wide.
			// 	// '2xl': { min: '2880px', max: '3880px' }, // Desktop widescreen.
			xs: { max: '425px' }, // Mobile (iPhone 3 - iPhone XS Max).
			sm: '425px', // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
			md: '898px', // Tablet (matches max: iPad Pro @ 1112px).
			lg: '1200px', // Desktop smallest.
			xl: '1980px', // Desktop wide.
			'2xl': '2880px', // Desktop widescreen.
		},
	},

	plugins: [],
};
