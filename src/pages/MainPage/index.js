/* eslint-disable import/no-extraneous-dependencies */
import {Button} from "antd";
import {ipcRenderer} from "electron";
import React,{useCallback} from "react";


// import css from "./style.scss";

export default function FunctionComponent() {
  const handleClick=useCallback(async ()=>{
    const result=await ipcRenderer.invoke("web-boot-strap",{message:"dasdasdsa"});
    alert(result);
  },[]);
  return (
    <div>
      <div>保存一个空文件并弹出提示框</div>
      <Button type="primary" onClick={handleClick}>保存文件并显示</Button>
    </div>
)}
