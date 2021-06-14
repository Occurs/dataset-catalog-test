module.exports = (api) => {
  const mode = process.env.NODE_ENV ?? 'production';

  api.cache.using(() => mode);

  return {
    presets: [
      ['@babel/preset-env',
        {
          "targets": {
            "node": "current"
          }
        }
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  };
};
