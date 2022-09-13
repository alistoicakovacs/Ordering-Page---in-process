const loginButton = document.querySelector(".login-button");
const username = document.querySelector(".user-input");
const password = document.querySelector(".user-password");

// User object
const User = function (username, password) {
	this.username = username;
	this.password = password;
};
const user1 = new User("ask", 1234);

// login button
loginButton.addEventListener("click", function () {
	if (username.value === user1.username && password.value == user1.password) {
		console.log("success");
		document.querySelector(".login-container").classList.add("hidden");
		document.querySelector(".item-container").classList.remove("hidden");
	} else {
		alert("Incorrect username or password");
	}
});
