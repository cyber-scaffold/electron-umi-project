import Router from "@koa/router";

const router = new Router();

router.get("/api/hello_words", async (context) => {
  return "hello words";
});

export default router.routes();