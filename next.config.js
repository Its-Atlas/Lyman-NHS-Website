/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/about",
				destination: "/",
				permanent: true,
			},
			{
				source: "/contact",
				destination: "/",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https:",
				host: "media.tenor.com",
				pathname: "/img/*",
			},
		],
	},
};

module.exports = nextConfig;
