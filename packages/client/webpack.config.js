module.exports = {
  //...
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    loaders: [{ test: /\.css$/, loader: 'style-loader!css-loader' }],
  },
};
