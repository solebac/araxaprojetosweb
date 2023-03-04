import { Categoria } from "../../../../../types/categoria";

type Props = {
  cat: Categoria;
};

const SelectOption = ({ cat }: Props) => {
  return (
    <option
      key={cat.id}
      value={cat.id}
      //selected={cat.id === 2 ? true : false}
    >
      {cat.nome}
    </option>
  );
};
export default SelectOption;
