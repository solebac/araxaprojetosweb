import { useEffect, useState } from "react";
import { Artigo } from "../../../../../types/artigo";
import CardItem from "./CardItem";

type Props = {
  post: Artigo[];
  busca: string;
};
const CardDispatcher = ({ post, busca }: Props) => {
  const [lista, setLista] = useState(post);

  function testaBusca(titulo: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(titulo);
  }

  useEffect(() => {
    setLista(post);
    const novaLista = post.filter((item) => testaBusca(item.titulo));
    setLista(novaLista);
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
