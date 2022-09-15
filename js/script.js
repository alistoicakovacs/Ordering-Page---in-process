// importing the json file
import jsonData from './convertcsv.json' assert {type:'json'}

const loginButton = document.querySelector(".login-button");
const username = document.querySelector(".user-input");
const password = document.querySelector(".user-password");

/////////////////////////////////////////////////
// The list should contain the products from the JSON file that has to be converted from the xls list.
// Login functionality has yet to be fixed and be set dynamic
	// Username and Password should match for each individual user
	// Only one user should be matched at a time
	// Refreshing the page should not cancel the log in

// List items - filter 
	// Show picture on hover


// User object constructor
const User = function (username, password) {
	this.username = username;
	this.password = password;
};

const user1 = new User("ask", 1234);
const user2 = new User("jcl", 1234)


// login button 
loginButton.addEventListener("click", function (element) {
	if (username.value ===user1.username && password.value == user1.password) {
		console.log("success");
		document.querySelector(".login-container").classList.add("hidden");
		document.querySelector(".item-container").classList.remove("hidden");
	} else {
		alert("Incorrect username or password");
	}
	// testing
	// document.querySelector(".login-container").classList.add("hidden");
	// document.querySelector(".item-container").classList.remove("hidden");
	createList(jsonData);
});

// const jsonObject = fetch('convertcsv.json')
// .then(response => response.json())
// .then(json =>{
// 	const parsed = JSON.parse(JSON.stringify(json));
// 	console.log(parsed) // returns array of objects / correct
	// document.querySelector('.items').append(parsed) // returns undefined / object object
// 	return json;
// })


// console.log(jsonObject) // returns Promise {<pending>}

// async function parseJSON() { 
// 	// const response = await fetch('/convertcsv.json');
// 	// return response;
// 	return fetch('/convertcsv.json')
// 	.then(response => {
// 		console.log(response); // logs the response
// 		return response;
// 	})
// }

// console.log(parseJSON())

// function showItems() {
// 	fetch('convertcsv.json')
// 	//get the JSON data
// 	.then(response => response.json()) 
// 	// .then(response => JSON.stringify(response))
// 	// use (display) the JSON data
// 	.then(data => createList(data))
	
// }


// Creating the json list and displaying it in the items list
function createList(array) {
	// selecting the item container
	const itemsList = document.querySelector('.items')
	const firstTab = document.createElement('div')
	// const secondTab = document.createElement('div')
	// const thirdTab = document.createElement('div')
	// const fourthTab = document.createElement('div')
	// const fifthTab = document.createElement('div')

	for(let i=0; i < array.length; i++) {
		const div = document.createElement('div')
		div.classList.add('div-container')
		const articles = document.createElement('li');
		const descriptions = document.createElement('li');
		const supplier = document.createElement('li');
		const type = document.createElement('li');
		const use = document.createElement('li');

		articles.classList.add('articles')
		articles.innerHTML = array[i].artnr
		descriptions.innerHTML = array[i].description
		supplier.innerHTML = array[i].supplier
		type.innerHTML = array[i].type
		use.innerHTML = array[i].use
		div.appendChild(articles)
		div.append(descriptions)
		div.append(supplier)
		div.append(type)
		div.append(use)
		firstTab.appendChild(div)		
	}
	itemsList.append(firstTab)

	// itemsList.append(stringified)
};

// createList(jsonData)


const dropdown = document.querySelectorAll('.dropdown')
const itemsListContainer = document.querySelector('.item-list-container')

for(let i=0; i < dropdown.length; i++) {
	dropdown[i].addEventListener('change', function() {
		console.log(dropdown[i].value)
		// const filteredData = jsonData.filter(function(filter) { 
		
		// })
	})
}
	
	// function createList(filteredarray) {
	// 	// selecting the item container
	// 	const itemsList = document.querySelector('.items')
	// 	const firstTab = document.createElement('div')
	// 	// const secondTab = document.createElement('div')
	// 	// const thirdTab = document.createElement('div')
	// 	// const fourthTab = document.createElement('div')
	// 	// const fifthTab = document.createElement('div')
	
	// 	for(let i=0; i < filteredarray.length; i++) {
	// 		const div = document.createElement('div')
	// 		div.classList.add('div-container')
	// 		const articles = document.createElement('li');
	// 		const descriptions = document.createElement('li');
	// 		const supplier = document.createElement('li');
	// 		const type = document.createElement('li');
	// 		const use = document.createElement('li');
	
	// 		articles.classList.add('articles')
	// 		articles.innerHTML = filteredarray[i].artnr
	// 		descriptions.innerHTML = filteredarray[i].description
	// 		supplier.innerHTML = filteredarray[i].supplier
	// 		type.innerHTML = filteredarray[i].type
	// 		use.innerHTML = filteredarray[i].use
	// 		div.appendChild(articles)
	// 		div.append(descriptions)
	// 		div.append(supplier)
	// 		div.append(type)
	// 		div.append(use)
	// 		firstTab.appendChild(div)		
	// 	}
	// 	itemsList.append(firstTab)
	
	// 	// itemsList.append(stringified)
	// };

	// createList()
	
	// itemsListContainer.innerHTML = jsonData.includes('GC').innerHTML;
	
	
// });


const lieferantenDropdown = document.getElementById('lieferanten')
const gewerkDropdown = document.getElementById('gewerk')
const anwendungDropdown = document.getElementById('anwendung')

// create an empty array
const arraySuppliers = [];
const arrayGewerk = []
const arrayAnwendung = []

// filtered functon that takes suppliers from jsonData and pushes them into arraySuppliers, created earlier
const filterFunction = jsonData.forEach(function(e) {
	arraySuppliers.push(e.supplier);
	arrayGewerk.push(e.type)
	arrayAnwendung.push(e.use)
})

// create a new set from arraySuppliers - the new set will return the new array without the duplicates from the given array
const newSetSuppliers = new Set(arraySuppliers)
const newSetGewerk = new Set(arrayGewerk)
const newSetAnwendung = new Set(arrayAnwendung)


// loop through the array and for each element, create a new element - option - and add the inner HTML to the element (supplier) - and then append the element to the dropdown menu
// this has to be optimised
newSetSuppliers.forEach(function(e) {
	const newElement = document.createElement('option')
	// console.log(newElement)
	// console.log(e)
	newElement.innerHTML = e;

	lieferantenDropdown.append(newElement)
})

newSetGewerk.forEach(function(e) {
	const newElement = document.createElement('option')
	// console.log(newElement)
	// console.log(e)
	newElement.innerHTML = e;

	gewerkDropdown.append(newElement)
})

newSetAnwendung.forEach(function(e) {
	const newElement = document.createElement('option')
	// console.log(newElement)
	// console.log(e)
	newElement.innerHTML = e;

	anwendungDropdown.append(newElement)
})

// Filtering the dropdown list arrays
// this has to be optimised
lieferantenDropdown.addEventListener('change',function(e) {
	const filteredData = jsonData.filter(function(articles) { 
		return articles.supplier === lieferantenDropdown.value;
	})
	console.log(filteredData)
	
})


gewerkDropdown.addEventListener('change',function(e) {
	const filteredData = jsonData.filter(function(articles) { 
		return articles.type === gewerkDropdown.value;
	})
	console.log(filteredData)
	
})

anwendungDropdown.addEventListener('change',function(e) {
	const filteredData = jsonData.filter(function(articles) { 
		return articles.use === gewerkDropdown.value;
	})
	console.log(filteredData)
	
})