export type SecaoDTO = {
    id: number;
    nome: string | null;
    categoria_id?: number | null;
}

export const TResetSecao: SecaoDTO = {
    id: 0,
    nome: null,
    categoria_id: null,
}