import React from "react";
import classnames from "classnames";
import css from "./style.scss";

export default function BasicLayout({children}) {
  return (
    <div className={classnames(css.basic_layout_container)}>
      <div className={classnames(css.basic_layout_content)}>
        {children}
      </div>
    </div>
)};