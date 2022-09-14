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
	if (username.value ===user1.username && password.value == user1.password) {
		console.log("success");
		document.querySelector(".login-container").classList.add("hidden");
		document.querySelector(".item-container").classList.remove("hidden");
	} else {
		alert("Incorrect username or password");
	}
	// //testing
	// document.querySelector(".login-container").classList.add("hidden");
	// document.querySelector(".item-container").classList.removeAtt("hidden");
	// users.forEach(function(element) {
		
	// 	if (username.value === element.username && password.value === element.password) {
	// 		document.querySelector('.login-container').classList.add('hidden')
	// 		document.querySelector(".item-container").classList.remove("hidden");
	// 	} else {
	// 		alert("Incorrect username or password");
	// }});
});


// The list should contain the products from the JSON file that has to be converted from the xls list.
// Login functionality has yet to be fixed and be set dynamic
	// Username and Password should match for each individual user
	// Only one user should be matched at a time
	// Refreshing the page should not cancel the log in

// List items - filter 
	// Show picture on hover
