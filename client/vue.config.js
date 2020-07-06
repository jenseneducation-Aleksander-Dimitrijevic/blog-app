const path = require("path");
module.exports = {
  outputDir: path.resolve(path.join(__dirname, "../server/public")),
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
      },
    },
  },
  transpileDependencies: ["vuetify"],
};
