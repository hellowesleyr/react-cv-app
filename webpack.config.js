const path = require('path');

module.exports  = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
          directory: path.resolve(__dirname,'dist'),
        } ,
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
      },

    output: {
        path: path.join(__dirname,"/dist"),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: {
                    and: [/node_modules/], // Exclude libraries in node_modules ...
                    not: [
                      // Except for a few of them that needs to be transpiled because they use modern syntax
                      /unfetch/,
                      /d3-array|d3-scale/,
                      /@hapi[\\/]joi-date/,
                    ]
                  },
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.css$/i,
    
                use: ['style-loader', 'css-loader'],
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
        
                type: 'asset/resource',
        
              },

        ]
    },

};