import React from "react";

interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}

const Container = ({ children }: AuxProps) => (
  <main>
    <section className="landscape">{children}</section>
  </main>
);

export default Container;
