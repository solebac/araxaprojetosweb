import UI from "../../../../pages/AplicationSys";
import ListaPostsSys from "../../../../pages/AplicationSys/components/ListaPostsSys";
import SubMenuSys from "./SubMenuSys";
const HomeSys = () => {
  return (
    <>
      <UI>
        <SubMenuSys />
        <ListaPostsSys />
      </UI>
    </>
  );
};
export default HomeSys;
