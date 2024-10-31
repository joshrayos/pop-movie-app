import { ReactNode, useState } from "react";

interface Prop {
  children: ReactNode;
}

export const ListBox = ({ children }: Prop) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};
