import React from "react";

interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}

const Container = ({ children }: AuxProps) => (
  <main>
    <section className="landscape">
      <div className="container">{children}</div>
    </section>
  </main>
);

export default Container;
