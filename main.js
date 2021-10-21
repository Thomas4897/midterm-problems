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

	for(let i = 0; i < str.length; i++){
		const isLetter = isNaN(str[i]);

		if(isLetter === false && 
			str[i] !== " "){
				output = true;
			}
	}

	return output;
}

function containsLowerCase(str) {
	return str.toUpperCase() !== str;
}

function containsUpperCase(str) {
	return str.toLowerCase() !== str;
}

function containsNonAlphanumeric(str) {
	let output = false;

	for(const letter of str){
	if(containsLowerCase(letter) === false &&
	containsUpperCase(letter) === false &&
	containsDigit(letter) === false &&
	letter !== ""
	){
		output = true;
	}
}


	return output;
}

function containsSpace(str) {
	return str.includes(" ");
}

function digits(num) {
	let numStr = Math.abs(num).toString();
	let output = [];

	if(numStr.length === 1){
		output.push(Math.abs(num));
	}

	if(numStr.length >  1){
		for(let i = 0; i < numStr.length; i++){
			if(!(numStr[i] === "-" || numStr[i] === ".") ){
				output.push(Number(numStr[i]));
			} 
		}
	}

	return output;
}

function truncate(str) {
	let output = "";
	if(str.length < 15){
		output = str;
	} else {
		for(let i = 0; i < 8; i++){
			output += str[i];
	}
	output += "..."
}

	return output;
}

function isValidPassword(str) {
	let output = false;
	
	if(containsUpperCase(str) === true &&
	containsLowerCase(str) === true &&
	containsDigit(str) === true &&
	containsNonAlphanumeric(str) === true
	) {
		output = true;
	}

	if(containsSpace(str) === true){
		output = false;
	}

	return output;
}

function onlyPunchy(arr) {
	let output = [];

	for(let i = 0; i < arr.length; i++){
		output.push(exclaim(arr[i]));	
	}

	for(let i = 0; i < output.length; i++){
		
		if(isLong(output[i]) === true){
			output.splice(i, 1);
		}
	}

	return output;
}

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
