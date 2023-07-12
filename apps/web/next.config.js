module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],

  async rewrites() {
    return [
      // petstore spi rewrites
      {
        source: "/api/:path*",
        destination: "http://petstore.swagger.io/v1/pets*",
      },
    ];
  },
};
