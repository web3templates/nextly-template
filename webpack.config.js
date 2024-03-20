module.exports = {
    module: {
      rules: [
        { test: /\.css$/, use: 'css-loader' },
        { test: /\.ts$/, use: 'ts-loader' },
        {test: /\.tsv$/, use: 'tsv-loader'},
        {est: /\.txt$/, use: 'txt-loader'},
      ],
    },
  };