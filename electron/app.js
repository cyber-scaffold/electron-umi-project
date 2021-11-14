import {app,dialog} from "electron";
import create_server from "@/server/create_server";
import create_window from "@/methods/create_window";


app.on("ready",async ()=>{
  await create_server();
  console.log(process.env.PROCESS_ENV);
  await dialog.showMessageBox({
    type:"info",
    title:"系统提示",
    message:["process.env.PROCESS_ENV",process.env.PROCESS_ENV].join("\n")
  });
  if(process.env.PROCESS_ENV==="development"){
    await create_window("http://localhost:7007");
  };
  if(process.env.PROCESS_ENV==="production"){
    await create_window("http://localhost:9000");
  };
});

app.on("window-all-closed",()=>app.quit());