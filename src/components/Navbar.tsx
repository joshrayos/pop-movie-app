import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

export const Navbar = ({ children }: Prop) => {
  return <nav className="nav-bar">{children}</nav>;
};
