import { useParams } from "react-router-dom";
import AplicationSys from "../../../../../pages/AplicationSys";
import FormAutorInsert from "../../../../../pages/AplicationSys/components/Formularios/adicionar/FormAutor";
import FormAutorEdit from "../../../../../pages/AplicationSys/components/Formularios/editar/FormAutor";
import FormAutorVisualizar from "../../../../../pages/AplicationSys/components/Formularios/visualizar/FormAutor";
/** 0-INSERT 1-UPDATE */
type Props = {
  tipo: number;
};

const FormAutoSys = ({ tipo }: Props) => {
  const { autorId } = useParams();
  const formularios = [
    <FormAutorInsert />,
    <FormAutorEdit autorId={autorId ? Number.parseInt(autorId, 10) : 0} />,
  ];
  return (
    <>
      <AplicationSys>{formularios[tipo]}</AplicationSys>
    </>
  );
};
export default FormAutoSys;
