import { subWord } from "./s-box.js";

/** textový řetězec k substituci */
const MESSAGE = "ahoj";

/** spuštění skriptu */
console.log(`[uloha-9]: start`);
console.log(`[uloha-9]: subWord("${ MESSAGE }") = ${ subWord(MESSAGE) }`);
console.log(`[uloha-9]: stop`);
