import { extgcd } from "./ditrich_filip_ukol6.source.js";

/** spuštění skriptu */
console.log(`[ukol-6]: start`);
const result = extgcd(123, 321);
console.log(`[ukol-6]: extgcd(123, 321) = ${ JSON.stringify(result) }`);
console.log(`[ukol-6]: stop`);
