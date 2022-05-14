import { extgcd } from "./utils.js";

/** spuštění skriptu */
console.log(`[uloha-06]: start`);
const result = extgcd(123, 321);
console.log(`[uloha-06]: extgcd(123, 321) = ${ JSON.stringify(result) }`);
console.log(`[uloha-06]: stop`);
