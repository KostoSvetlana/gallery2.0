const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
      //  filename: 'main.bundle.js',
      filename: 'main.[contenthash].js',
      path: resolve(__dirname, 'dist')
    },
    module:{
     rules: [
         {
         test: /\.s[ac]ss$/i,
         use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use:[
            {
                loader: 'imd-optimize-loader',
                options: {
                    compress: {
                        mode: 'high',
                        webpP: true,
                        gifsicle: true,
                        disableOnDevelopment: false
                    }
                }
            }
        ]
      },
    {
        test:/\.(mp[3|4])$/i,
        use: [
            'file-loader'
        ]
      }
    ]
    },
    plugins: [
       new HtmlWebpackPlugin({
           template: resolve(__dirname,'src', 'index.html')
    
       }),
       new MiniCssExtractPlugin({
           filename: '[name].[contenthash].css'
       }),
    ]
}