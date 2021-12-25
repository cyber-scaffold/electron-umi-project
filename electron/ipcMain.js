import fs from "fs";
import path from "path";
import {promisify} from "util";
import {ipcMain,dialog,shell} from "electron";

const static_path=path.resolve(__dirname,"../statics/test.txt");

ipcMain.handle("web-boot-strap",async (event,args)=>{
  const static_content=await promisify(fs.readFile)(static_path,"utf-8");
  const {canceled,filePath}=await dialog.showSaveDialog();
  if(canceled){
    return "已取消";
  };
  await promisify(fs.writeFile)(filePath,static_content);
  await shell.showItemInFolder(filePath);
  return "已保存";
});
