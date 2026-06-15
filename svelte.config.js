import adapter from "@sveltejs/adapter-static";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	compilerOptions: {
		runes: true,
	},
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: undefined,
			precompress: true,
		}),
		inlineStyleThreshold: 40000,
	},
};

export default config;
