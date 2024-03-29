import { IAutor } from '../interfaces/IAutor';
import { ICategoria } from '../interfaces/ICategoria';
import { fromBase64 } from '../utils/base64';
import http from '../utils/http';
import { BASE_PEOPLE } from '../utils/requests';

//Passagem de Params para o Backend
declare interface Credentials {
    email: string
    senha: string
}
//Retorna da API pós autentication
/*declare interface User {
    id: string
    name: string
    email: string
}*/

declare interface Basic {
    basic: string;
    token: string;
    tipo: string;
    autor: IAutor;
}

type Token = string;
type AutBasic = string;

/**Armazenamento em memory */
export const login = (credentials: Credentials) => {
    const resp = http
        /**.post<Basic & { User: Token }>(`/auth`, credentials) */
        .post<Basic & { basic: AutBasic }>(`/auth`, credentials)
        .then(res => res.data)
    return resp;
}

/**Armazenamento local */
export const storeToken = (token: Token) => {
    window.localStorage.setItem('token', token)
}
export const storeBasic = (basic: AutBasic, credentials: Credentials) => {
    const verify = fromBase64(credentials.email + ':' + credentials.senha);
    window.localStorage.setItem('basic', basic)
    window.localStorage.setItem('verify', verify)
    http.defaults.headers.common.Authorization = `Basic ${verify}`;
}
export const storeAutor = (autor: IAutor) => {
    window.localStorage.setItem(BASE_PEOPLE, JSON.stringify(autor));
}
export const storeParseAutor = (obj: any) => {
    return JSON.parse(obj || "{}");
}
export const clearHeaders = () => {
    http.defaults.headers.common.Authorization = '';
}
/**Recuperação do Token */
export const getToken = () => {
    return window.localStorage.getItem('token')
}
export const getBasic = () => {
    return window.localStorage.getItem('basic')
}
export const getVerify = () => {
    return window.localStorage.getItem('verify')
}
export const getResetCategory = () => {
    const categoria: ICategoria = {
        id: 1,
        nome: "Portifolio",
        descricao: "Documentos Uteis",
    };
    return categoria;
}