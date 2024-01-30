const log = console.log;
const { readFile, readFileSync, writeFile } = require("fs");

// readFile("./content/test1.txt", "utf8", (err, res) => {
// 	if (err) {
// 		log(err);
// 		return;
// 	}
// 	const first = res;
// 	log(first);
// 	readFile("./content/test2.txt", "utf-8", (err, res) => {
// 		if (err) {
// 			log(err);
// 			return;
// 		}
// 		const second = res;
// 		log(second);
// 	});
// });

readFile("./content/test1.txt", "utf8", (err, res) => {
	if (err) {
		log(err);
		return;
	}
	setTimeout(() => {
		const first = res;
		log(first);
	});
	const second = readFileSync(
		"./content/test2.txt",
		"utf-8"
		// (err, res) => {
		// if (err) {
		// log(err);
		// return;
		// }
		// const second = res;
		// }
	);
	log(second);
});
