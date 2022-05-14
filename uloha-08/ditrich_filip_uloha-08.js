import { getKeyLength } from "./utils.js";

/** vstupní text */
const MESSAGE = "PTGBWRMRDHBLYOTAVUUPNAGUTZMXPVNVSHMUMSHMVKOHGRTKJMEQIHERVMPGRMXHGQKXFIGWMYTCPKYDAWCUTFBNLYNBNLKBNOUYBZSHMVWTAARWXFLUITUHAQYUHGMJMHEPGCBAOLVNALKKBANUYFNBOVGGPKVKLEOAA";

console.log(getKeyLength(MESSAGE));

/** spuštění skriptu */
console.log(`[uloha-08]: start`);
console.log(`[uloha-08]: getKeyLength("${ MESSAGE }") = ${ getKeyLength(MESSAGE) }`);
console.log(`[uloha-08]: stop`);
