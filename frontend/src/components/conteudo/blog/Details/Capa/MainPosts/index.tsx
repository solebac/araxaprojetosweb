import React from "react";

interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}

const MainPosts = ({ children }: AuxProps) => (
  <main>
    <section className="landscape">
      <section className="container">{children}</section>
    </section>
  </main>
);

export default MainPosts;
