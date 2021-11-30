import {app} from "electron";
import server from "@server/server";
import create_window from "@electron/methods/create_window";


app.on("ready",async ()=>{
  if(process.env.PROCESS_ENV==="development"){
    const window_object=await create_window("http://localhost:7005");
    window_object.webContents.openDevTools();
  };
  if(process.env.PROCESS_ENV==="production"){
    server.listen(9000,()=>console.log("server is run port 9000"));
    await create_window("http://localhost:9000");
  };
});

app.on("window-all-closed",()=>app.quit());

