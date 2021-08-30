import {useHistory} from "dva";
import {useCallback} from "react";
import ProLayout from "@ant-design/pro-layout";

export default function BasicLayout(props) {
  const {route,children}=props;

  const history=useHistory();

  const menuItemRender=useCallback((item,react_node)=>{
    return (
      <a href="javascrpt:viod(0)" onClick={()=>history.push(item.path)}>
        {react_node}
      </a>
  )},[]);

  return (
    <ProLayout location={history.location} menuItemRender={menuItemRender} route={route}>
      {children}
    </ProLayout>
)};