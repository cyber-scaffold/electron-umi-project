import Koa from "koa";
import path from "path";
import cors from "@koa/cors";
import koa_static from "koa-static";

import inverse_operation from "@server/routers/inverse_operation";
import response_middleware from "@server/middlewares/response_middleware";

const server=new Koa();

server.use(cors());
server.use(koa_static(path.resolve(__dirname,"../dist/")));
server.use(response_middleware);
server.use(inverse_operation);

export default server;





