import cx from "classnames";
import * as React from "react";

type IconName = string;

type IconProps = {
  name: IconName;
} & React.JSX.IntrinsicElements["span"];
export const Icon = ({ name, className, ...props }: IconProps) => (
  <span className={cx("icon", `icon-${name}`, className)} {...props} />
);
