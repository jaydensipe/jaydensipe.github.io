import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			},
		},
		extend: {
			boxShadow: {
				// Normal Styles
				"main-bg-light": "7px 7px #E3E2F0, 14px 14px #E2EFF0",
				"main-bg-light-halloween": "7px 7px #F7D9FF, 14px 14px #FFE8D2",
				"main-bg-light-christmas": "7px 7px #FFDDDD, 14px 14px #DDECE1",
				"main-bg-light-new-years": "7px 7px #FFF6C7, 14px 14px #F9DBFF",
				"main-bg-dark": "7px 7px #12BE94, 14px 14px #9412BE",
				"main-bg-dark-halloween": "7px 7px #FF7600, 14px 14px #52006A",
				"main-bg-dark-christmas": "7px 7px #35B25C, 14px 14px #BB0000",
				"main-bg-dark-new-years": "7px 7px #CB00F0, 14px 14px #F0CB00",
				// Mobile Styles
				"main-bg-light-mobile": "0px 7px #E3E2F0, 0px 14px #E2EFF0, 0px -7px #E3E2F0, 0px -14px #E2EFF0",
				"main-bg-light-halloween-mobile": "0px 7px #F7D9FF, 0px 14px #FFE8D2, 0px -7px #F7D9FF, 0px -14px #FFE8D2",
				"main-bg-light-christmas-mobile": "0px 7px #FFDDDD, 0px 14px #DDECE1, 0px -7px #FFDDDD, 0px -14px #DDECE1",
				"main-bg-light-new-years-mobile": "0px 7px #FFF6C7, 0px 14px #F9DBFF, 0px -7px #FFF6C7, 0px -14px #F9DBFF",
				"main-bg-dark-mobile": "0px 7px #12BE94, 0px 14px #9412BE, 0px -7px #12BE94, 0px -14px #9412BE",
				"main-bg-dark-halloween-mobile": "0px 7px #FF7600, 0px 14px #52006A, 0px -7px #FF7600, 0px -14px #52006A",
				"main-bg-dark-christmas-mobile": "0px 7px #35B25C, 0px 14px #BB0000, 0px -7px #35B25C, 0px -14px #BB0000",
				"main-bg-dark-new-years-mobile": "0px 7px #CB00F0, 0px 14px #F0CB00, 0px -7px #CB00F0, 0px -14px #F0CB00",

			},
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
};

export default config;
