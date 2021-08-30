import {Button} from "antd";
import axios, {} from "axios";
import React,{useState,useCallback} from "react";

// import css from "./style.scss";

export default function FunctionComponent(props) {

  const [server_data,set_server_data]=useState({});

  const handleCallback=useCallback(async ()=>{
    const {data}=await axios("/api/hello_words");
    await set_server_data(data);
  },[]);

  return (
    <div>
      <Button type="primary" onClick={handleCallback}>加载数据</Button>
      <div>
        <div>获取到的数据为</div>
        <code>{JSON.stringify(server_data)}</code>
      </div>
    </div>
)};

