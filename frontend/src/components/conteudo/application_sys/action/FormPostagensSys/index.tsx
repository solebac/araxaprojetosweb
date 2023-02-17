import { useParams } from "react-router-dom";
import AplicationSys from "../../../../../pages/AplicationSys";
import FormPostsAdicionar from "../../../../../pages/AplicationSys/components/Formularios/adicionar/FormPosts";
import FormPostsEditar from "../../../../../pages/AplicationSys/components/Formularios/editar/FormPosts";
import FormPostsVisualizar from "../../../../../pages/AplicationSys/components/Formularios/visualizar/FormPosts";

type Props = {
  tipo: number;
};

const FormPostagensSys = ({ tipo }: Props) => {
  const { articlesId } = useParams();
  const formularios = [
    <FormPostsAdicionar />,
    <FormPostsEditar
      articlesId={articlesId ? Number.parseInt(articlesId, 10) : 0}
    />,
    <FormPostsVisualizar
      articlesId={articlesId ? Number.parseInt(articlesId, 10) : 0}
    />,
  ];
  return (
    <>
      <AplicationSys>{formularios[tipo]}</AplicationSys>
    </>
  );
};
export default FormPostagensSys;

/**
 * Old
 * <AplicationSys>
        {formularios[etapaAtual]}
        {tipo === 0 ? (
          <FormPostsAdicionar />
        ) : (
          <FormPostsEditar
            articlesId={articlesId ? Number.parseInt(articlesId, 10) : 0}
          />
        )}
      </AplicationSys>
 */
