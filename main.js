const path=require("path");
require("@babel/register")({
  cache:true,
  cwd:path.resolve(__dirname,"./"),
  presets: [ 
    require.resolve("@babel/preset-env")
  ],
  plugins:[
    [require.resolve("@babel/plugin-transform-runtime")],
    [require.resolve("babel-plugin-module-resolver"), {
      root: [path.resolve(__dirname,"./electron/")],
      alias: {
        "@": path.resolve(__dirname,"./electron/"),
        "@@": path.resolve(__dirname,"./")
      }
    }]
  ]
});
require("./electron/app.js");