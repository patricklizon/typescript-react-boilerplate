import * as cn from "classnames";
import * as React from "react";

import { CommonHtmlProps } from "../../../typings/html";

import * as styles from "./svg-icon.scss";



export type TIconSize = "small" | "medium";

interface ISVGIcon extends CommonHtmlProps {
  svg: string,
  size?: TIconSize
}

export const SVGIcon:React.SFC<ISVGIcon> = ({ svg, size }) => {
  function createMarkup (): React.ReactNode {
    return <div className={cn(styles.svgIcon, size)} dangerouslySetInnerHTML={{__html: svg}} />;
  }

  return (<>{createMarkup()}</>);
};
