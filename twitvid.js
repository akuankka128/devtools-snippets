// console.log gifs' and videos' sources on Twitter
console.log(Array.from(
	document.querySelectorAll('video[src]')
).map(element => element.src).join(' '));
