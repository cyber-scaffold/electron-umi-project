import {screen,BrowserWindow} from "electron";

export default async function create_window(load_url){
  const {width,height}=await screen.getPrimaryDisplay().workAreaSize;
  const window_object=new BrowserWindow({
    width:parseInt(width*0.8),
    height:parseInt(height*0.8),
    x:parseInt(width*0.1),
    y:parseInt(height*0.1),
    frame:true,
    show:false,
    webviewTag:true,
    webPreferences: {
      nodeIntegration:true,
      contextIsolation:true,
      backgroundThrottlingBoolean:false
    }
  });
  window_object.loadURL(load_url);
  await new Promise((resolve)=>window_object.once("ready-to-show",resolve));
  window_object.on("new-window",()=>console.log("new-window"));
  window_object.show();
  return window_object;
};