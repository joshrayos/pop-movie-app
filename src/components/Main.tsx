import { ReactNode } from "react";
interface Prop {
  children: ReactNode;
}

export const Main = ({ children }: Prop) => {
  return <main className="main">{children}</main>;
};
