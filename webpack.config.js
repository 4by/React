const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// process это обьект Node.js
const isDev = process.argv[3] === 'development';

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`);

const cssLoaders = (extra) => {
  // установили эти лоадеры отдельно для css
  // работают справа-налево
  // css-loader расшифровывает css
  // MiniCssExtractPlugin (содержащий лоадер) создает отдельные css файлы
  // (вместо него могли бы использовать style-loader, который просто загружает css в html)
  const loaders = [{
    loader: MiniCssExtractPlugin.loader,
    options: {},
  }, 'css-loader'];
  if (extra) loaders.push(extra);
  return loaders;
};

const jsLoaders = (preset) => {
  const loaders = [
    {
      // babel преобразовывает слишком старый (или эксперементально новый) код
      // в тот, который понимают браузеры
      loader: 'babel-loader',
      options: {
        // preset это конфигурация, в которую будет конвертировать код babel
        presets: ['@babel/preset-env'],
        // плагины для бейбла (в данном случае поставили плагин, чтобы бейбл
        // видел эксперементальные возм-ти языка)
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
  ];
  if (preset) loaders[0].options.presets.push(preset);

  return loaders;
};

const optimization = () => {
  const config = {
    splitChunks: {
      // если мы импортировали одну библиотеку несколько раз - вебпак
      // вынесет ее в отдельный файл (vendors...)
      chunks: 'all',
    },
  };
  if (!isDev) {
    config.minimizer = [
      // оптимизаторы для css
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin(),
    ];
  }
  return config;
};

const plugins = () => {
  const base = [
    // создает в сборке файл index.html
    new HtmlWebpackPlugin({
      // отправляет информацию в тег <title>
      // title: "Webpack Eugene",
      // документ на основе которого происходит сборка
      template: path.resolve(__dirname, './public/index.html'),
      minify: { collapseWhitespace: !isDev },
    }),
    // очищает прошлые файлы сборки
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),

    // чтобы при сборке вызывался еслинт
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      // формат при сборке, чтобы не делать npx eslint ./src --fix
      fix: true,
    }),
  ];
  return base;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  // файлы, импортирующиеся в сборочный index.html
  entry: {
    // помимо основного файла для того, чтобы бейбл видел новые возможности
    // также запускаем полифилл для babble (см.документацию babble)
    main: ['@babel/polyfill', './index.jsx'],
  },
  // как преобразуется входящий файл
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'myBuild'),
  },
  resolve: {
    // среди каких расширений будет искать тип файла, если мы не указали его при испорте
    // по умолчанию ищет js, json
    extensions: ['.js', '.json', '.jsx'],
  },
  optimization: optimization(),
  devServer: {
    // обновление данных без обновления страницы работает с этой опцией
    static: './',
    port: 4200,
    // ??
    hot: isDev,
  },

  // возвращает то, какой исходный код будет в режиме разработки
  // (полный список с преимуществами и недостатками в документации webpack)
  devtool: isDev ? 'source-map' : false,

  plugins: plugins(),

  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        // файлы (здесь форматы картинок, шрифтов) загрузили не через лоадер, а способом с вебпак5
        test: /\.(png|jpg|svg|gif|ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: jsLoaders('@babel/preset-react'),
      },
    ],
  },

};
