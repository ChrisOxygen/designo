import { type ComponentPropsWithoutRef } from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonProps = {
  onClick?: () => void;
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = LinkProps;

export default function Button(props: ButtonProps | AnchorProps) {
  if ("to" in props) {
    return <Link {...props}></Link>;
  } else {
    return <button {...props}></button>;
  }
}
