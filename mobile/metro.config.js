const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// Metro'nun yalnızca mobile/ klasörünü izlemesini sağlar.
// Üst dizindeki pnpm-workspace.yaml nedeniyle LüleCraft/ kökü
// izlemeye alınıyordu; buradaki node_modules mevcut olmadığından
// ENOENT hatası çıkıyordu.
config.watchFolders = [projectRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
];

module.exports = config;
