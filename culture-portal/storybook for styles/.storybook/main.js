const path = require('path');
module.exports = {
stories: ['../src/**/*.stories.[tj]s'],
addons: ['@storybook/addon-actions/register'],
webpackFinal: (config) => console.dir(config, { depth: null }) || config,
module: {
  loaders: [
    {
     test: /\.css?$/,
     loaders: ['style', 'raw'],
     include: path.resolve(__dirname, '../'),
    },
  ],
},
};
// module.exports = {
// webpackFinal: (config) => console.dir(config, { depth: null }) || config,
// };
