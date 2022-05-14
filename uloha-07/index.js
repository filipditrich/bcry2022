import {extgcd} from "../uloha-06/gcd.js";
import { getRandPrime, getRandNum, getPrimes } from "../uloha-10/utils.js";

for (let i = 0; i < 500; i++) {
	const a = 5;
	const b = 15;
	const k = getRandPrime(1, 1000);
	const l = getRandPrime(1, 1000);
	
	const gcd = extgcd(a, b).gcd;
	const gcd2 = extgcd(a * k, b * l).gcd;
	
	
	if (gcd2 !== gcd)
		console.log(`a=${a}\t\tb=${b}\t\tk=${k}\t\tl=${l}\t\t\t${gcd}!=${gcd2}`);
}
console.log('done');
