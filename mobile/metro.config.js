const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// Üst dizindeki pnpm-workspace.yaml nedeniyle LüleCraft/ kökü
// izlemeye alınmasın; sadece mobile/ klasörü izlensin.
// Expo'nun varsayılan watchFolders listesiyle birleştiriyoruz.
const defaultWatchFolders = config.watchFolders ?? [];
config.watchFolders = [
  ...new Set([...defaultWatchFolders, projectRoot]),
];

// nodeModulesPaths için de Expo varsayılanlarını koruyoruz.
const defaultNodeModulePaths = config.resolver.nodeModulesPaths ?? [];
config.resolver.nodeModulesPaths = [
  ...new Set([...defaultNodeModulePaths, path.resolve(projectRoot, "node_modules")]),
];

module.exports = config;
