// function getData() {
// 	return fetch("/js/convertcsv.json");
// }

// window.onload = async (e) => {
// 	const jsonData = await getData();
// 	console.log(jsonData);
// };
// const data = async function getData(data) {
// 	const response = await fetch("./js/convertcsv.json");
// 	const json = await response.json();
// 	return json;
// };

// getData().then((data) => data);

// console.log(getData());

// async function fetchAsync() {
// 	var response = await fetch("./js/convertcsv.json");
// 	window.data = await response.json();

// 	// console.log(response);
// 	console.log(data);
// 	return data;

async function getData(url) {
	const response = await fetch("./js/convertcsv.json");

	return response.json();
}

const data = await getData("./js/convertcsv.json");

console.log({ data });
