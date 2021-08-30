import Koa from "koa";
import path from "path";
import koa_static from "koa-static";

import helloWord from "@/server/routers/hello-word";
import response_middleware from "@/server/middlewares/response_middleware";

const server=new Koa();

server.use(koa_static(path.resolve(__dirname,"../dist/")));
server.use(response_middleware);
server.use(helloWord);

export default async function create_server(){
  server.listen(9000,()=>console.log("server is run port 9000"));
};

