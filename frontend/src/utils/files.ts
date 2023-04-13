import fileDownload from "js-file-download";
import quarentena from "../data/quarentena.json";
import http from "./http";

const objJson = quarentena;

export const requestsFile = (tipo: string) => {
    const arr = tipo.split(".");
    const filtro = objJson.find((opcao) => opcao.id === arr[0])?.value;
    http
        .get(`/articles/download/${filtro}`, { responseType: "blob" })
        .then((resp) => {
            fileDownload(resp.data, `${arr[0] + ".rar"}`);
        });
};