import React from 'react';

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const Container = ({ children }: AuxProps) => (
  <section className="principal-portifolio">
    <section className="container-fluid--portifolio mtx">
      <aside className="row row-mod">{ children }</aside>
    </section>
  </section>
);

export default Container;
