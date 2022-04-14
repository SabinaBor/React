const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
  if(IS_DEV) return 'eval';
  else if(IS_PROD) return false;
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'), //откуда начинать
    output: { //куда складывать транспилированный js код
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js"
    },
    module: {
        rules: [{ //все файлы tsx jsx будут читаться ts-loader
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }] //настройка всех loaders
    },
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
    ],
    devServer: {
        port: 3000,
        open: true, //когда сервер будет загружаться, то страница будет открываться автоматически
        hot: IS_DEV //приложение будет reload при изменении каких-либо файлах
    },
    //формируются ли и как формируютсяя sourceMap - спец файлы которые позволяют размапать транспилированный
    // js ts файл на все файлы, которые находятся в нашем приложении
    //это помогает в development, чтобы находить ошибки.
    devtool: setupDevtool()
};