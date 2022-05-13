/**
 * Rozšířený euklidovský algoritmus pro výpočet gcd(a,b)
 * @param a
 * @param b
 * @returns {{x: (number|*|number), gcd: (*), y: (number|*)}|{x: (number|*|number), gcd: (*), y: number}|{x: number, gcd, y: number}}
 */
function extgcd(a, b) {
	/** prohození, pokud potřeba */
	if (a < b) {
		const swappedRes = extgcd(b, a);
		return { gcd: swappedRes.gcd, x: swappedRes.y, y: swappedRes.x };
	}
	
	/** pokud `b` je nula, nejvyšší společný dělitel je `a` */
	if (b === 0) return { gcd: a, x: 1, y: 0 };
	
	/** Euklidova aktualizace */
	const r = a % b;
	const gcdWithRemRes = extgcd(b, r);
	
	return {
		gcd: gcdWithRemRes.gcd,
		/** aktualizační pravidlo */
		x: gcdWithRemRes.y,
		y: (gcdWithRemRes.x - (Math.floor(a / b) * gcdWithRemRes.y))
	};
}

/** spuštění skriptu */
console.log(`[gcd.js]: start`);
const result = extgcd(123, 321);
console.log(`[gcd.js]: extgcd(123, 321) = ${ JSON.stringify(result) }`);
console.log(`[gcd.js]: stop`);
