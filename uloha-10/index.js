import { cipherMessage, decipherMessage, rsaKeygen } from "./rsa.js";

/** vstupní zpráva */
const MESSAGE = "ahoj";

/** spuštění skriptu */
console.log(`[uloha-10]: start`);
const config = rsaKeygen(419, 541);
console.log(`[uloha-10]: rsaKeygen output: ${ JSON.stringify(config) }`);
const encoded = cipherMessage(MESSAGE, config.publicKey.e, config.publicKey.n);
console.log(`[uloha-10]: cipherMessage("${ MESSAGE }", ${ config.publicKey.e }, ${ config.publicKey.n }) = ${ encoded }`);
const decoded = decipherMessage(encoded, config.privateKey.d, config.privateKey.n);
console.log(`[uloha-10]: decipherMessage("${ encoded }", ${ config.privateKey.d }, ${ config.privateKey.n }) = ${ decoded }`);
console.log(`[uloha-10]: stop`);
