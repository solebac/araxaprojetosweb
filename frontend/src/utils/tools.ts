import { IArtigo } from "../interfaces/IArtigo";

export function clearArroba(artigo: IArtigo) {
    const test =
        artigo.conteudoIntroducao +
        artigo.conteudoParagrafoOne +
        artigo.conteudoParagrafoTwo +
        artigo.conteudoConclusao;
    let myArray = test.split("@");
    return myArray;
}