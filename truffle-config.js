module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: ganache-cli running locally)
      port: 8080, // Standard Ganache port
      network_id: "*", // Match any network id
      gas: 6721975, // Gas limit used for deploys
      gasPrice: 20000000000, // Gas price used for deploys (20 gwei)
    },
    // Add more networks for other environments like mainnet, kovan, etc.
  },
  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
