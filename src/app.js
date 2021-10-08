import {ipcRenderer} from "electron";

ipcRenderer.on("main-command",(event,{message})=>{
  console.log("message==>",message);
});

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
