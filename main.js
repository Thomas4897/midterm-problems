function isEvenlyDivisible(x, y) {
	let output = false;
	if (x % y === 0) {
		output = true;
	}

	return output;
}

function halfSquare(x) {
	return x ** 2 / 2;
}

function isLong(str) {
	let output = false;

	if (str.length >= 15) {
		output = true;
	}

	return output;
}

function exclaim(str) {
	let count = 0;
	let output = "";

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "!") {
			count++;
		}
	}

	for (let i = 0; i < str.length - count; i++) {
		output += str[i];
	}

	return output + "!";
}

function countWords(str) {
	let strArr = str.split(" ");

	return strArr.length;
}

function containsDigit(str) {
	let output = false;

	for (let i = 0; i < str.length; i++) {
		const isLetter = isNaN(str[i]);
		if (isLetter === false && str[i] !== " ") {
			output = true;
		}
	}
	return output;
}

function containsLowerCase(str) {
	return str.toUpperCase() != str;
}

function containsUpperCase(str) {
	return str.toLowerCase() != str;
}

function containsNonAlphanumeric(str) {
	let output = false;

	for (let i = 0; i < str.length; i++) {
		const isLetter = isNaN(str[i]);
		if (
			isLetter === true ||
			(isLetter === false && isLetter === true) ||
			str[i] === " "
		) {
			output = true;
		}
	}
	return output;
}

function containsSpace() {}

function digits() {}

function truncate() {}

function isValidPassword() {}

function onlyPunchy() {}

module.exports = {
	isEvenlyDivisible,
	halfSquare,
	exclaim,
	isLong,
	containsDigit,
	containsLowerCase,
	containsUpperCase,
	containsNonAlphanumeric,
	containsSpace,
	countWords,
	digits,
	truncate,
	isValidPassword,
	onlyPunchy,
};
