import { useEffect, useState } from "react";
import { IArtigo } from "../../../../../interfaces/IArtigo";
import { ResetArtigo } from "../../../../../interfaces/reset";
import CardItem from "./CardItem";

type Props = {
  post?: IArtigo[];
  busca: string;
};
const CardDispatcher = ({ post = [ResetArtigo], busca }: Props) => {
  const [lista, setLista] = useState(post);

  function testaBusca(titulo: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(titulo);
  }

  useEffect(() => {
    setLista(post);
    const novaLista = post.filter((item) => testaBusca(item.titulo));
    setLista(novaLista);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busca, post]);
  return (
    <>
      <div>
        {lista.map((item) => (
          <CardItem post={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default CardDispatcher;
