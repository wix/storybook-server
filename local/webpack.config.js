const defaultConfig = require('@storybook/react-native/dist/server/config/webpack.config').default;
const customConfig = require('wix-react-native-storybook-server/webpack.config');

module.exports = Object.assign({}, defaultConfig, customConfig);
