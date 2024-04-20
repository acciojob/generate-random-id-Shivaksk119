function makeid(l) {
  // write your code here
	let chars = "ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

	let id = "";
	for(let i=0;i<l;i++) {
		let rndmIdx = parseInt(Math.random()*chars.length);
		let rndmVal = chars[rndmIdx];
		id = id + rndmVal;
	}
	return id;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
