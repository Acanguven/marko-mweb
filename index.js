require('require-self-ref');
require('marko/node-require');

const isProduction = process.env.NODE_ENV === 'production';

require('lasso').configure({
  plugins: [
    'lasso-marko'
  ],
  outputDir: __dirname + 's/',
  bundlingEnabled: isProduction,
  minify: isProduction,
  fingerprintsEnabled: isProduction,
  minifyCSS: isProduction,
  minifyJS: isProduction,
  urlPrefix: '/s/'
});

console.log('PRODUCTION MODE:', isProduction);

require('./src');