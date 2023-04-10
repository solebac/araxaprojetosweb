export interface ISecao {
  id: number | null;
  nome: string | null;
};
export interface ISecaoCategoria {
  contador: number;
  nome: string;
  categoria_id: number;
  secao_id: number;
}