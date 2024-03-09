/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			SFPro: ["SFPro"],
		},
		colors: {
			white: "#fff",
			black: "#000",
			blue: "#567dff",
			red: "#eb5545",
			gray: "#8e8e93",
			borderColor: "#232323",
			darkGray: "#1b1b1b",
			grayIcons: "#676E75",
			hover: "#111",
		},
		extend: {},
	},
	plugins: [],
};
