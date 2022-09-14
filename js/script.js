const loginButton = document.querySelector(".login-button");
const username = document.querySelector(".user-input");
const password = document.querySelector(".user-password");

// User object constructor
const User = function (username, password) {
	this.username = username;
	this.password = password;
};

const user1 = new User("ask", 1234);
const user2 = new User("jcl", 1234)


// login button 
loginButton.addEventListener("click", function (element) {
	// if (username.value ===user1.username && password.value == user1.password) {
	// 	console.log("success");
	// 	document.querySelector(".login-container").classList.add("hidden");
	// 	document.querySelector(".item-container").classList.remove("hidden");
	// } else {
	// 	alert("Incorrect username or password");
	// }
	// //testing
	document.querySelector(".login-container").classList.add("hidden");
	document.querySelector(".item-container").classList.remove("hidden");
	// users.forEach(function(element) {
		
	// 	if (username.value === element.username && password.value === element.password) {
	// 		document.querySelector('.login-container').classList.add('hidden')
	// 		document.querySelector(".item-container").classList.remove("hidden");
	// 	} else {
	// 		alert("Incorrect username or password");
	// }});
	showItems();
});

/////////////////////////////////////////////////
// The list should contain the products from the JSON file that has to be converted from the xls list.
// Login functionality has yet to be fixed and be set dynamic
	// Username and Password should match for each individual user
	// Only one user should be matched at a time
	// Refreshing the page should not cancel the log in

// List items - filter 
	// Show picture on hover

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

function showItems() {
	fetch('convertcsv.json')
	//get the JSON data
	.then(response => response.json()) 
	// use (display) the JSON data
	.then(data => createList(data))	
}


function createList(data) {
	const itemsList = document.querySelector('.items')

	for(let i=0; i < data.length; i++) {
		const listItem = document.createElement('li');
		listItem.innerHTML = data[i]
		itemsList.appendChild(listItem)
	}
}
