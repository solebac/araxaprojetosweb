import Blackboard from "../Blackboard";
import Control from "../Control";
import LinhaTempo from "../LinhaTempo";
import Container from "../Container";
import ScrollToTop from "../../../../utils/ScrollToTop";

const NewHome = () => {
  return (
    <>
      <Container>
        <LinhaTempo />
        <Control />
        <Blackboard />
        <ScrollToTop />
      </Container>
    </>
  );
};
export default NewHome;
