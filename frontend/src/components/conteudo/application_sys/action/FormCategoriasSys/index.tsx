import { useParams } from "react-router-dom";
import AplicationSys from "../../../../../pages/AplicationSys";
import FormCategoriaAdicionar from "../../../../../pages/AplicationSys/components/Formularios/adicionar/FormCategoria";
import FormCategoriaEditar from "../../../../../pages/AplicationSys/components/Formularios/editar/FormCategoria";
import FormCategoriaVisualizar from "../../../../../pages/AplicationSys/components/Formularios/visualizar/FormCategoria";

interface IntrinsicElements {
  tipo: number;
}
const FormCategoriasSys = ({ tipo }: IntrinsicElements) => {
  const { categoriaId } = useParams();
  const formularios = [
    <FormCategoriaAdicionar />,
    <FormCategoriaEditar
      categoriaId={categoriaId ? Number.parseInt(categoriaId, 10) : 0}
    />,
    <FormCategoriaVisualizar
      categoriaId={categoriaId ? Number.parseInt(categoriaId, 10) : 0}
    />,
  ];
  return (
    <>
      <AplicationSys>{formularios[tipo]}</AplicationSys>
    </>
  );
};
export default FormCategoriasSys;
