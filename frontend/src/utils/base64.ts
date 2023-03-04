import { decode as base64_decode, encode as base64_encode } from 'base-64';

export function toBase64(input: string) {
    return base64_decode(input);
}

export function fromBase64(encoded: string) {
    return base64_encode(encoded)
}