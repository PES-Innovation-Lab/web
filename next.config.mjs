/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'theinnovationlab.in',
				port: '',
			},
		],
	},
};

export default nextConfig;
