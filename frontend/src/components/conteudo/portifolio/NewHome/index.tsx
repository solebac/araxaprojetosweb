import React from "react";
import Blackboard from "../Blackboard";
import Control from "../Control";
import LinhaTempo from "../LinhaTempo";
import Container from "../Container";

const NewHome = () => {
  return (
    <>
      <Container>
        <LinhaTempo />
        <Control />
        <Blackboard />
      </Container>
    </>
  );
};
export default NewHome;
