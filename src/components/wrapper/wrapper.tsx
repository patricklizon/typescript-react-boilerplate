import * as cn from "classnames";
import * as React from "react";

import { CommonHtmlProps } from "../../../typings/html";

import * as styles from "./wrapper.scss";



const Wrapper: React.SFC<CommonHtmlProps> = ({ children, className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {children}
    </div>
  );
};



export { Wrapper };
