import { extgcd } from "../uloha-06/utils.js";

/**
 * Vrátí index všech hledaných textových bloků vstupního řetezce
 * @param textBlock
 * @param str
 * @returns {*[]}
 */
export const getIndicesOf = (textBlock, str) => {
	const searchStrLen = textBlock.length;
	if (searchStrLen === 0) return [];
	let startIndex = 0, index, indices = [];
	
	/** text beru jako case-insensitive */
	str = str.toLowerCase();
	textBlock = textBlock.toLowerCase();
	
	/** vrátí všechny index hledného bloku textu */
	while ((index = str.indexOf(textBlock, startIndex)) > -1) {
		indices.push(index);
		startIndex = index + searchStrLen;
	}
	return indices;
};

/**
 * Funkce vracející objekt opakujících se textových bloků s jejich indexy a vzdálenostmi mezi sebou
 * @param message
 * @returns {{}|number}
 */
export const getCommonTextBlocks = (message) => {
	const blocks = {};
	
	/** hledám opakující se bloky textu, které jsou nejméně 3 znaky dlouhé */
	const matchRegex = new RegExp(`(\\S{3,10})(?=.*?\\1)`, "g");
	const match = message.matchAll(matchRegex);
	
	/** výpočet indexů výskytu a jejich vzdálenostmi mezi sebou */
	for (const m of match) {
		const occurrences = getIndicesOf(m[0], message);
		blocks[m[0]] = {
			count: message.split(m[0]).length - 1,
			occurrences,
			distances: occurrences.map((pos, i, arr) => arr[i + 1] - pos).filter(Boolean)
		};
	}
	
	return blocks;
};

/**
 * Vrátí pravděpodnou délku klíče
 * @param message
 * @returns {number}
 */
export const getKeyLength = (message) => {
	const blocks = getCommonTextBlocks(message.replace(/\W/g, "").toLowerCase());
	/** spojíme všechny vzdálenosti do jednoho pole */
	const distances = Object.values(blocks).map((block) => block.distances).flat();
	
	/** vypočteme nejvyššího společného dělitele */
	let n = 0;
	for (let i = 0; i < distances.length; i++) {
		n = extgcd(distances[i], n).gcd;
	}
	
	return n;
};
