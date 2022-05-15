import { getKeyLength } from "./ditrich_filip_ukol8.source.js";

/** vstupní text */
const MESSAGE = "PTGBWRMRDHBLYOTAVUUPNAGUTZMXPVNVSHMUMSHMVKOHGRTKJMEQIHERVMPGRMXHGQKXFIGWMYTCPKYDAWCUTFBNLYNBNLKBNOUYBZSHMVWTAARWXFLUITUHAQYUHGMJMHEPGCBAOLVNALKKBANUYFNBOVGGPKVKLEOAA";

console.log(getKeyLength(MESSAGE));

/** spuštění skriptu */
console.log(`[ukol-8]: start`);
console.log(`[ukol-8]: getKeyLength("${ MESSAGE }") = ${ getKeyLength(MESSAGE) }`);
console.log(`[ukol-8]: stop`);
