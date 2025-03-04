// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"@nuxt/content",
		"@tailwindcss/typography",
		"@nuxt/image",
	],
	content: {
		highlight: {
			theme: {
				default: "min-light",
				dark: "min-dark",
			},
		},
	},
	colorMode: {
		classSuffix: "",
	},
	nitro: {
		prerender: {
			routes: ["/sitemap.xml"],
		},
	},
});
