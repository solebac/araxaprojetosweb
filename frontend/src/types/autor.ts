export type Autor = {
  id: number;
  nome: string;
  bio: string;
  foto: string;
  email: string;
  usuario: string;
};
export type AutorPage = {
  content: Autor[],
  last: boolean,
  totalPages: number,
  totalElements: number,
  size: number,
  number: number,
  first: boolean,
  numberOfElements: number,
  empty: boolean,
}
