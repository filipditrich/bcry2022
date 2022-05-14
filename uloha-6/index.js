import { extgcd } from "./gcd.js";

/** spuštění skriptu */
console.log(`[uloha-6]: start`);
const result = extgcd(123, 321);
console.log(`[uloha-6]: extgcd(123, 321) = ${ JSON.stringify(result) }`);
console.log(`[uloha-6]: stop`);
