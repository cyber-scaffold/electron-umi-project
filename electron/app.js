import {app} from "electron";
import create_server from "@/server/create_server";
import create_window from "@/methods/create_window";


app.on("ready",async ()=>{
  await create_server();
  console.log(process.env.PROCESS_ENV);
  if(process.env.PROCESS_ENV==="development"){
    await create_window("http://localhost:7005");
  };
  if(process.env.PROCESS_ENV==="production"){
    await create_window("http://localhost:9000");
  };
});

app.on("window-all-closed", () => {
  app.quit();
});