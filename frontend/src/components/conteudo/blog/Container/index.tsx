import React from "react";

interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}

const Container = ({ children }: AuxProps) => (
  <main>
    <section className="blog-section">
      <article className="container">{children}</article>
    </section>
  </main>
);

export default Container;
