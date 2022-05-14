import { getKeyLength } from "./kasiski.js";

/** vstupní text */
const MESSAGE = "PTGBWRMRDHBLYOTAVUUPNAGUTZMXPVNVSHMUMSHMVKOHGRTKJMEQIHERVMPGRMXHGQKXFIGWMYTCPKYDAWCUTFBNLYNBNLKBNOUYBZSHMVWTAARWXFLUITUHAQYUHGMJMHEPGCBAOLVNALKKBANUYFNBOVGGPKVKLEOAA";

console.log(getKeyLength(MESSAGE));

/** spuštění skriptu */
console.log(`[uloha-8]: start`);
console.log(`[uloha-8]: getKeyLength("${ MESSAGE }") = ${ getKeyLength(MESSAGE) }`);
console.log(`[uloha-8]: stop`);
