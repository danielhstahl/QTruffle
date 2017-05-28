module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 22000, // node 1 port
      network_id: "*" // Match any network id
    },
    nodefour:  {
      host: "localhost",
      port: 22003,
      network_id: "*" // Match any network id
    },
    nodeseven:  {
      host: "localhost",
      port: 22006,
      network_id: "*" // Match any network id
    }
  }
};