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
      root: [path.resolve(__dirname,"./")],
      alias: {
        "@@": path.resolve(__dirname,"./"),
        "@server": path.resolve(__dirname,"./server/"),
        "@electron": path.resolve(__dirname,"./electron/")
      }
    }]
  ]
});

const server=require("./server/server").default;
server.listen(9000,()=>console.log("server is run port 9000"));