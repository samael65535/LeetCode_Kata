/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines2 = function(widths, S) {
	let maxWidth = 100
	let widthDict = {}
	for(let i = 0; i < widths.length; i++) {
		let c = String.fromCharCode(97+ i)
		widthDict[c] = widths[i]
	}
	let lines = 1
	let remainWidth = maxWidth
	let str = ''
	let ansWidth = 0
	for (let i = 0; i < S.length; i++){
		let c = S[i]
		let width = widthDict[c]
		if(remainWidth - width < 0) {
			remainWidth = maxWidth
			lines++
			str += '\n'
		}
		remainWidth -= width
		str+=c
	}
	return [lines, maxWidth -remainWidth]

};


var numberOfLines = function(widths, S) {
	let maxWidth = 100
	let widthDict = {}
	for(let i = 0; i < widths.length; i++) {
		let c = String.fromCharCode(97+ i)
		widthDict[c] = widths[i]
	}
	let lines = 1
	let remainWidth = maxWidth
	let str = ''
	let ansWidth = 0
	for (let i = 0; i < S.length; i++){
		let c = S[i]
		let width = widthDict[c]
		if(remainWidth - width < 0) {
			remainWidth = maxWidth
			lines++
			str += '\n'
		}
		remainWidth -= width
		str+=c
	}
	return [lines, maxWidth -remainWidth]

};
