import { Artigo } from "../types/artigo";

export function clearArroba(artigo: Artigo) {
    const test =
        artigo.conteudoIntroducao +
        artigo.conteudoParagrafoOne +
        artigo.conteudoParagrafoTwo +
        artigo.conteudoConclusao;
    let myArray = test.split("@");
    return myArray;
}