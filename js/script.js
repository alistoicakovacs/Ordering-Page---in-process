// Importing users
// import jsonData from "./convertcsv.json" assert { type: "json" };
import { User } from "./classes/User.js";

// all these functions underneath are not working - sketches

// async function getJson() {
// 	const response = await fetch("./convertcsv.json");
// 	const data = await response.json();
// 	return data;
// }

// getJson().then((data) => console.log(data));

// function getData() {
// 	fetch("/js/convertcsv.json");
// }

// window.onload = async (e) => {
// 	window.jsonData = await getData();
// 	console.log(jsonData.textContent);
// };

// function getData() {
// 	return fetch("/js/convertcsv.json");
// }

// window.onload = async (e) => {
// 	let jsonData = await getData();
// 	return jsonData;
// };

// async function fetchAsync() {
// 	var response = await fetch("./js/convertcsv.json");
// 	window.jsonData = await response.json();

// 	// console.log(response);
// 	console.log(data);
// 	return data;
// }

// import nodemailer from "nodemailer";
// const response = await fetch("./convertcsv.json");
// const jsonData = await response.json();
// console.log(response);
////////////////////////////////////
// selecting items from the html
const loginButton = document.querySelector(".login-button");
const username = document.querySelector(".user-input");
const password = document.querySelector(".user-password");
const items = document.querySelector(".items");
const cartButton = document.querySelector(".cart-button");
const dropdown = document.querySelectorAll(".dropdown");
const itemsListContainer = document.querySelector(".item-list-container");
const searchbox = document.getElementById("searchbox");
const lieferantenDropdown = document.getElementById("lieferanten");
const gewerkDropdown = document.getElementById("gewerk");
const anwendungDropdown = document.getElementById("anwendung");
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-container");
const divContainer = document.querySelector(".div-container");
const total = document.querySelector(".total");
const warenkorbTitle = document.querySelector(".warenkorb-title");
const itemQty = document.querySelector(".item-qty");
const itemQtyWk = document.querySelector(".item-qty-wk");
const projektnummerTitle = document.querySelector(".projektnummer-title");
const projektnummerInput = document.getElementById("projektnummer");
const articlesListButton = document.querySelector(".articles-list");
const homeButton = document.querySelector(".home");
const welcome = document.querySelector(".welcome");
const cartCloseButton = document.querySelector(".close-cart-button");
const closeButton = document.querySelector(".close-button");
const dropdownListContainer = document.querySelector(
	".dropdown-lists-container"
);
const contact = document.querySelector(".contact");
const sendButton = document.querySelector(".send-button");
const darkButton = document.querySelector(".dark-mode");
/////////////////////////////////////////////////
// The list should contain the products from the JSON file that has to be converted from the xls list.
// Login functionality has yet to be fixed and be set dynamic
// Username and Password should match for each individual user
// Only one user should be matched at a time
// Refreshing the page should not cancel the log in

///////////////////////////////////
// Tasks to work on:
// Optimising functions and code
// If clicked outside the cart, cart should close. ✔
// Fix some filter categories that are not showing
// Add items be pressing ENTER after typing in amount
// Next: Backend? Mailing feature
// Mail should send a structured email to another email address, containing the items from the cart and the given projekt number.

// sketches
// List items - filter
// Show picture on hover

// User object constructor

// async function getData(url) {
// 	const response = await fetch("./js/convertcsv.json");

// 	return response.json();
// }

// const jsonData = await getData("./js/convertcsv.json");

// console.log({ jsonData });
///////////////////////
// assigning users
const user1 = new User("ask", 1234, "Ali Stoica Kovacs", "test@email.com");
const user2 = new User("jcl", 1234, "Bestellung KKT", "test@email.de");

const users = [user1, user2];

// fetching json list and then calling the functions on it.
fetch("./js/convertcsv.json")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		var jsonData = data;

		// Login
		loginButton.addEventListener("click", function (element) {
			if (
				username.value === user1.username &&
				password.value == user1.password

				// && projektnummerInput.value.length == 7
			) {
				console.log("success");
				document.querySelector(".login-container").classList.add("hidden");
				// document.querySelector(".checkout").classList.remove("hidden");
				document.querySelector(".item-container").classList.remove("hidden");
				// welcome note
				document
					.querySelector(".dropdown-lists-container")
					.classList.add("hidden");
				document.querySelector(".topbar").classList.add("hidden");
				welcome.classList.add("opacity");
				// when loaded, should exit on click
				welcome.addEventListener("click", function () {
					welcome.classList.add("opacity-fadeout-effect");
					document.querySelector(".topbar").classList.remove("hidden");
				});
			} else {
				alert("Incorrect username or password");
			}
			document.querySelector(".projektnummer-title").innerHTML =
				projektnummerInput.value;
			// testing
			// document.querySelector(".login-container").classList.add("hidden");
			// document.querySelector(".item-container").classList.remove("hidden");
		});

		// Creating the json list and displaying it in the items list
		function createList(array) {
			// selecting the item container
			const itemsList = document.querySelector(".items");
			const firstTab = document.createElement("div");

			for (let i = 0; i < array.length; i++) {
				const div = document.createElement("div");
				div.classList.add("div-container");
				const articles = document.createElement("li");
				const descriptions = document.createElement("li");
				const supplier = document.createElement("li");
				const type = document.createElement("li");
				const use = document.createElement("li");
				const button = document.createElement("button");
				const value = document.createElement("input");
				const minusButton = document.createElement("button");
				const plusButton = document.createElement("button");
				const addToCartButton = document.createElement("button");

				div.classList.add("list-div-container");
				articles.classList.add("articles");
				articles.style.fontWeight = "bold";
				articles.innerHTML = array[i].artnr;

				descriptions.innerHTML = array[i].description;
				descriptions.classList.add("descriptions");

				supplier.innerHTML = array[i].supplier;
				supplier.classList.add("supplier");

				type.innerHTML = array[i].type;
				type.classList.add("type");

				use.innerHTML = array[i].use;
				use.classList.add("use");

				// value.style.width = "40px";
				// value.style.margin = "20px";
				value.style.textAlign = "center";
				value.style.width = "30px";
				value.classList.add("value");
				value.pattern = "[0-9]*";

				minusButton.classList.add("cart-button");
				minusButton.innerHTML = `<i class="fa-sharp fa-solid fa-minus"></i>`;

				button.classList.add("cart-button");

				plusButton.innerHTML = `<i class="fa-regular fa-plus"></i>`;
				plusButton.classList.add("plus-button");

				addToCartButton.classList.add("cart-button");
				addToCartButton.innerHTML = `<i class="fa-solid fa-cart-shopping fa-xl"></i>`;
				// addToCartButton.style.marginLeft = "15px";

				div.appendChild(articles);
				div.append(descriptions);
				div.append(supplier);
				div.append(type);
				div.append(use);
				div.append(button);
				button.prepend(value);
				button.prepend(minusButton);
				button.append(plusButton);
				button.append(addToCartButton);

				firstTab.appendChild(div);

				// add items to the cart function

				button.addEventListener("click", function (event) {
					// conditions on which button is clicked
					// if the plus button is clicked, then itterate
					// if (value === "") {
					// 	alert("add value");
					// }
					if (event.target.classList == "fa-regular fa-plus") {
						value.value++;
						// else if the minues is clicked, decrease value
					} else if (
						event.target.classList == "fa-sharp fa-solid fa-minus" &&
						value.value > 0
					) {
						value.value--;
					}
					// if the cart button is clicked, create cart items and increase the quantity
					else if (
						event.target.classList == "fa-solid fa-cart-shopping fa-xl" &&
						value.value !== "" &&
						!cartContainer.textContent.includes(array[i].description)
					) {
						const cartDiv = document.createElement("div");
						const cartArtnr = document.createElement("li");
						const cartArtDescr = document.createElement("li");
						const deleteButton = document.createElement("button");
						const total = document.createElement("div");
						const editButton = document.createElement("button");

						cartDiv.classList.add("cart-div");
						// create art number and append it - according to the event listener
						cartArtnr.innerHTML = array[i].artnr;
						cartArtnr.classList.add("cart-item");
						// create description and append it - according to the event listener
						cartArtDescr.innerHTML =
							array[i].description +
							` <strong class="nr">(${value.value})</strong>`;

						editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
						editButton.classList.add("edit-button");

						cartArtDescr.classList.add("cart-art-description");
						// create the delete button and append it
						deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
						deleteButton.classList.add("delete-button");

						// total.innerHTML = `<p>Total Artikel: </p>`
						total.classList.add("total");

						// if (cartContainer.textContent.includes(array[i].description)) {
						// 	console.log('duplicate')
						// 	cartArtDescr.innerHTML =
						// 	array[i].description + ` <strong>(${value.value++})</strong>`;
						// }

						cartDiv.append(cartArtnr);
						cartDiv.append(cartArtDescr);
						cartDiv.append(deleteButton);
						cartDiv.append(editButton);
						cartContainer.appendChild(cartDiv);

						// Delete button for the cart + incrementing and decrementing the qty number on button click
						deleteButton.addEventListener("click", function () {
							this.parentElement.remove();
							itemQty.textContent--;
							itemQtyWk.textContent--;
							// if the cart is empty, remove and add class lists to get back to normal
							if (itemQtyWk.textContent === "0") {
								checkout.classList.add("hidden");
								document
									.querySelector(".item-container")
									.removeChild(document.querySelector(".overlay"));

								console.log("empty");
								// document
								// 	.querySelector(".item-container")
								// 	.removeChild(document.querySelector(".overlay"));
							}
						});

						editButton.addEventListener("click", function (e) {
							const inputQuantity = window.prompt("Bestellmenge ändern");
							this.parentElement.querySelector(".nr").textContent =
								"(" + inputQuantity + ")";
							
						});
						// let arrayOfProducts = [];
						// arrayOfProducts += arrayOfProducts + array[i];
						// console.log(arrayOfProducts);
						// update quantity and reset input value when a new item is added to the cart
						itemQty.textContent++;
						itemQtyWk.textContent++;
						value.value = "";
					}
					// changing the value on keypress
				});
				value.addEventListener("keydown", function (e) {
					if (e.key == "ArrowUp") {
						value.value++;
					}
					if (e.key == "ArrowDown" && value.value > 0) {
						value.value--;
					}
					
				});
			}
			itemsList.append(firstTab);
		}

		// createList(getData());

		// Searchbox functionality

		searchbox.style.padding = "5px 10px";
		searchbox.style.outline = "none";

		searchbox.addEventListener("input", function (e) {
			// creating a filtered variable in which we store the filtered values depending o the searchbox value - we also have to add them to lowercase in order to be able to search everything - case sensitive
			const searchdata = jsonData.filter(function (articles) {
				return articles.description
					.toLowerCase()
					.includes(searchbox.value.toLowerCase());
			});
			// empty items list
			document.getElementById("lieferanten").value = "select";
			document.getElementById("gewerk").value = "select";
			document.getElementById("anwendung").value = "select";
			items.innerHTML = "";
			// create a list from the searched data and display it
			createList(searchdata);
		});

		// create an empty array
		const arraySuppliers = [];
		const arrayGewerk = [];
		const arrayAnwendung = [];

		// filtered functon that takes suppliers from jsonData and pushes them into arraySuppliers, created earlier
		jsonData.forEach(function (e) {
			arraySuppliers.push(e.supplier);
			arrayGewerk.push(e.type);
			arrayAnwendung.push(e.use);
		});

		// create a new set from arraySuppliers - the new set will return the new array without the duplicates from the given array
		const newSetSuppliers = new Set(arraySuppliers);
		const newSetGewerk = new Set(arrayGewerk);
		const newSetAnwendung = new Set(arrayAnwendung);

		// loop through the array and for each element, create a new element - option - and add the inner HTML to the element (supplier) - and then append the element to the dropdown menu
		// this has to be optimised
		newSetSuppliers.forEach(function (e) {
			const newElement = document.createElement("option");
			newElement.innerHTML = e;
			lieferantenDropdown.append(newElement);
		});

		newSetGewerk.forEach(function (e) {
			const newElement = document.createElement("option");
			newElement.innerHTML = e;
			gewerkDropdown.append(newElement);
		});

		newSetAnwendung.forEach(function (e) {
			const newElement = document.createElement("option");
			newElement.innerHTML = e;
			anwendungDropdown.append(newElement);
		});

		// Filtering the dropdown list arrays
		// this has to be optimised
		lieferantenDropdown.addEventListener("change", function (e) {
			const filteredData = jsonData.filter(function (articles) {
				return articles.supplier == lieferantenDropdown.value;
			});
			// WORK ON THIS FUNCTION
			// this empties the itemslistcontainer
			items.innerHTML = "";
			searchbox.value = "";
			document.getElementById("gewerk").value = "select";
			document.getElementById("anwendung").value = "select";
			// document.getElementById('anwendung').value = "Select"
			// this creates a list of the filtered array
			createList(filteredData);

			if (lieferantenDropdown.value === "all") {
				items.innerHTML = "";
				createList(jsonData);
			}
		});

		// KLIMA does not show // TROCKENBAU not showing
		gewerkDropdown.addEventListener("change", function (e) {
			const filteredData = jsonData.filter(function (articles) {
				return articles.type == gewerkDropdown.value;
			});

			items.innerHTML = "";
			searchbox.value = "";
			document.getElementById("lieferanten").value = "select";
			document.getElementById("anwendung").value = "select";

			createList(filteredData);
			if (gewerkDropdown.value === "all") {
				items.innerHTML = "";
				createList(jsonData);
			}

			// console.log(gewerkDropdown.value)
		});

		// error : BAD / HOLZ is not showing
		anwendungDropdown.addEventListener("change", function (e) {
			const filteredData = jsonData.filter(function (articles) {
				return articles.use === anwendungDropdown.value;
			});
			// console.log(filteredData);

			items.innerHTML = "";
			searchbox.value = "";
			document.getElementById("lieferanten").value = "select";
			document.getElementById("gewerk").value = "select";
			createList(filteredData);

			if (anwendungDropdown.value === "all") {
				items.innerHTML = "";
				createList(jsonData);
			}
		});

		const checkout = document.querySelector(".checkout");
		const warenkorbButton = document.querySelector(".warenkorb-button");
		// if (checkout)checkout.style.display = 'absolute';

		warenkorbButton.addEventListener("click", function (e) {
			checkout.classList.toggle("hidden");
			items.classList.toggle("opacity");

			// creating the overlay that comes in when the cart is opened
			// this comes on top of the items container, and it is removed on click
			const overlay = document.createElement("div");
			overlay.classList.add("overlay");
			document.querySelector(".item-container").append(overlay);
			overlay.style.height = "100%";
			overlay.style.width = "100%";
			overlay.style.backgroundColor = "black";
			overlay.style.opacity = "0.3";
			overlay.style.position = "absolute";
			overlay.style.borderRadius = "10px";
			overlay.style.zIndex = "99";

			if (checkout.classList !== "hidden") {
				document.querySelector(".item-container").appendChild(overlay);
			}

			window.addEventListener("click", function (e) {
				if (e.target == overlay) {
					this.document.querySelector(".item-container").removeChild(overlay);
					checkout.classList.add("hidden");
					items.classList.remove("opacity");
				}

				if (e.target == closeButton || e.target == cartCloseButton) {
					checkout.classList.add("hidden");
					this.document.querySelector(".item-container").removeChild(overlay);
				}
			});

			// if (e.target === cartCloseButton) {
			// 	console.log(e.target)
			// this.document.querySelector(".item-container").removeChild(overlay);
			// checkout.classList.add("hidden");
			// items.classList.remove("opacity");
			// }
		});

		// Another option for the cart
		// on each click, an item is added, but if it is added multiple times, increments and ( n ) <-- is added next to the description

		// sketches

		// async function main() {
		// 	let testAccount = await nodemailer.createTestAccount();

		// 	const transporter = nodemailer.createTransport({
		// 		host: "smtp.ethereal.email",
		// 		port: 587,
		// 		secure: false,
		// 		auth: {
		// 			user: "dylan.wunsch69@ethereal.email",
		// 			pass: "EZ357XBQ4EXHJVrbsU",
		// 		},
		// 	});

		// 	let info = await transporter.sendMail({
		// 		from: `"Ali" <alistoicakovacstest@gmail.com`,
		// 		to: "alistoicakovacstest@gmail.com",
		// 		subject: "test",
		// 		text: "test",
		// 	});
		// }

		// main().catch(console.error);

		// Create card
		// function createCard() {
		// 	const card = document.createElement("div");
		// 	const cardtitle = document.createElement("h3");
		// 	const cardtext = document.createElement("p");

		// 	card.classList.add("card");
		// 	cardtitle.classList.add("cardtitle");
		// 	cardtext.classList.add("cardtext");

		// 	// card.style.border = "1px solid black";
		// 	// card.style.width = "200px";
		// 	// card.style.height = "150px";
		// 	// card.style.index = "1000";
		// 	// card.style.position = "absolute";
		// 	card.style.display = "none";
		// 	cardtitle.textContent =
		// 		"Für weitere Fragen oder Bestellungen, bitte Email an die folgende Email Adresse senden:";
		// 	cardtext.textContent = `bestellung@kkt-cool.de`;

		// 	card.appendChild(cardtitle);
		// 	card.appendChild(cardtext);
		// 	document.body.append(card);
		// }
		// createCard();

		// load the product list on click
		articlesListButton.addEventListener("click", function (e) {
			if (!window.hasLoadedList) {
				document
					.querySelector(".dropdown-lists-container")
					.classList.remove("hidden");
				document
					.querySelector(".tabs-list-container")
					.classList.remove("hidden");
				itemsListContainer.classList.remove("hidden");
				contactDiv.classList.add("hidden");

				// document.querySelector(".dropdown-lists-container").style.display =
				// 	"grid";
				createList(jsonData);
				window.hasLoadedList = true;
			}
		});

		// hide elements and add the overlay
		homeButton.addEventListener("click", function (e) {
			document
				.querySelector(".dropdown-lists-container")
				.classList.add("hidden");
			// document.querySelector(".dropdown-lists-container").style.display =
			// 	"none";
			document.querySelector(".tabs-list-container").classList.add("hidden");
			itemsListContainer.classList.add("hidden");

			items.innerHTML = "";
			welcome.classList.remove("opacity-fadeout-effect");
			window.hasLoadedList = false;

			// welcome.addEventListener("click", function () {
			// 	welcome.classList.add("opacity-fadeout-effect");
			// });
		});
	});

// contact.addEventListener("click", function () {
// 	createCard();

// 	if (!window.hasLoadedList) {
// 		// hide elements
// 		document.querySelector(".dropdown-lists-container").style.display = "none";
// 		document.querySelector(".tabs-list-container").classList.add("hidden");
// 		itemsListContainer.classList.add("hidden");
// 		items.innerHTML = "";

// 		window.hasLoadedList = true;
// 	}
// 	window.hasLoadedList = false;
// });

// (function () {
// 	emailjs.init("60M2eE2c9YAljspev");
// });

// window.onload = function () {
// 	document
// 		.querySelector(".send-cart-button")
// 		.addEventListener("click", function (event) {
// 			event.preventDefault();
// 			console.log("click");
// 			// generate a five digit number for the contact_number variable
// 			// this.contact_number.value = (Math.random() * 100000) | 0;
// 			// these IDs from the previous steps
// 			emailjs.sendForm("contact_service", "contact_form", this).then(
// 				function () {
// 					console.log("SUCCESS!");
// 				},
// 				function (error) {
// 					console.log("FAILED...", error);
// 				}
// 			);
// 		});
// };

// sendCartButton.addEventListener("click", function () {
// 	console.log("click");
// });
// Email.send({
//     Host : "smtp.yourisp.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
const contactDiv = document.createElement("div");
contactDiv.classList.add("contact-div");

contact.addEventListener("click", function (e) {
	document.querySelector(".dropdown-lists-container").classList.add("hidden");
	document.querySelector(".tabs-list-container").classList.add("hidden");
	document.querySelector(".items").innerHTML = "";
	document.querySelector(".item-list-container").classList.remove("hidden");

	// document.getElementById("lieferanten").value = "select";
	// document.getElementById("gewerk").value = "select";
	// createList(filteredData);
	// document.getElementById("anwendung").value = "select";
	// createList(filteredData);

	// if the container does not contain something from the div that is created underneath, then it should create them - meaning, if there are divs already, they won't be recreated.
	if (!itemsListContainer.innerHTML.includes("h4")) {
		users.map(function (e) {
			const contactCard = document.createElement("div");
			const contactCardTitle = document.createElement("h4");
			const contactCardContent = document.createElement("p");

			contactCard.classList.add("contact-card");
			contactCardTitle.classList.add("contact-card-title");
			contactCardContent.classList.add("contact-card-content");

			contactCardTitle.textContent = e.fullname;
			contactCardContent.textContent = e.email;

			contactCard.appendChild(contactCardTitle);
			contactCard.appendChild(contactCardContent);
			contactDiv.append(contactCard);
		});

		itemsListContainer.append(contactDiv);
	}

	contactDiv.classList.remove("hidden");
	// contactDiv.classList.remove('hidden')

	window.hasLoadedList = false;
});

darkButton.addEventListener("click", function (e) {
	console.log("click");
});


// sending the email data

const emailData = [];

const cartItem = document.querySelector('.cart-div')
const cartDescription = document.querySelector('.cart-art-description')

sendButton.addEventListener('click', function(element) { 
	
	
		document.querySelectorAll('.cart-div').forEach(function(element) {
				emailData.push(
				element.firstChild.textContent + " " + element.children[1].textContent
			)
			
		})
	console.log(emailData)

	emailData.join('\n')

	window.open(`mailto:bestellung@kkt-cool.de?subject=Bestellung: ${projektnummerInput.value}&body=${emailData}`)
});

