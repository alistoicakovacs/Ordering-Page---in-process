// importing the json file
import jsonData from "./convertcsv.json" assert { type: "json" };

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
const total = document.querySelector('.total')
const warenkorbTitle = document.querySelector('.warenkorb-title')
const itemQty = document.querySelector('.item-qty')
const itemQtyWk = document.querySelector('.item-qty-wk')
const projektnummerTitle = document.querySelector('.projektnummer-title')
const projektnummerInput = document.getElementById('projektnummer')
/////////////////////////////////////////////////
// The list should contain the products from the JSON file that has to be converted from the xls list.
// Login functionality has yet to be fixed and be set dynamic
// Username and Password should match for each individual user
// Only one user should be matched at a time
// Refreshing the page should not cancel the log in

// List items - filter
// Show picture on hover

const data = jsonData;

// User object constructor
class User {
	constructor(username, password) {
		this.username = username;
		this.password = password;
	}
}

const user1 = new User("ask", 1234);
const user2 = new User("jcl", 1234);

// login button
loginButton.addEventListener("click", function (element) {
	if (username.value === user1.username && password.value == user1.password && projektnummerInput.value.length == 7 ) {
		console.log("success");
		document.querySelector(".login-container").classList.add("hidden");
		// document.querySelector(".checkout").classList.remove("hidden");
		document.querySelector(".item-container").classList.remove("hidden");
	} else {
		alert("Incorrect username or password");
	}
	document.querySelector('.projektnummer-title').innerHTML = projektnummerInput.value
	// testing
	// document.querySelector(".login-container").classList.add("hidden");
	// document.querySelector(".item-container").classList.remove("hidden");
	createList(data)
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
		const value = document.createElement('input')

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

		value.style.width = "40px"
		value.style.margin = '20px'
		value.type = Number
		value.classList.add('.value')
		
		button.classList.add("cart-button");
		button.innerHTML =`<i class="fa-regular fa-plus"></i>`;

		div.appendChild(articles);
		div.append(descriptions);
		div.append(supplier);
		div.append(type);
		div.append(use);
		div.append(button);
		button.prepend(value)

		firstTab.appendChild(div);

		// add items to the cart function
		button.addEventListener("click", function (event) {
			// create the elements
			// const modal = document.createElement('div')
			// const modalText = document.createElement('h5')
			// const modalInput = document.createElement('input')

			// modal.classList.add('modal')
			// modalText.textContent = "Menge: "
			// modalText.classList.add('modal-text')
			// modalInput.placeholder = "Type here"
			// modalInput.classList.add('modal-input')

			// modal.append(modalText)
			// modal.append(modalInput)
			// items.append(modal)
			if(value.value !== "") {
				const cartDiv = document.createElement("div");
				const cartArtnr = document.createElement("li");
				const cartArtDescr = document.createElement("li");
				const deleteButton = document.createElement("button");
				const total = document.createElement('div')
				const cartItemQty = document.createElement('p')
	
				cartDiv.classList.add("cart-div");
				// create art number and append it - according to the event listener
				cartArtnr.innerHTML = data[i].artnr;
				cartArtnr.classList.add("cart-item");
				// create description and append it - according to the event listener
				cartArtDescr.innerHTML = data[i].description +` <strong>(${value.value})</strong>`;
	
				cartArtDescr.classList.add("cart-art-description");
				// create the delete button and append it
				deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
				deleteButton.classList.add("delete-button");
				
				// total.innerHTML = `<p>Total Artikel: </p>`
				total.classList.add('total')
	
	
				cartDiv.append(cartArtnr);
				cartDiv.append(cartArtDescr);
				cartDiv.append(deleteButton);
				cartContainer.appendChild(cartDiv);
	
	
				
				// Delete button for the cart + incrementing and decrementing the qty number on button click
				deleteButton.addEventListener("click", function () {
					this.parentElement.remove();
					itemQty.textContent--;
					itemQtyWk.textContent--;
					// if the cart is empty, remove and add class lists to get back to normal
					if(itemQty.textContent === "0") {
						checkout.classList.add('hidden')
						items.classList.remove('opacity')
					}
	

			
				});
				
				itemQty.textContent++;
				itemQtyWk.textContent++;
	
				// if(cartArtnr) {
				// 	console.log('works')
				// }
			}
			
			value.value ="";

		});



	}
		itemsList.append(firstTab);
}

// create an empty array
const arraySuppliers = [];
const arrayGewerk = [];
const arrayAnwendung = [];

// filtered functon that takes suppliers from jsonData and pushes them into arraySuppliers, created earlier 
const filterFunction = jsonData.forEach(function (e) {
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
	createList(filteredData);

	if (anwendungDropdown.value === "all") {
		items.innerHTML = "";
		createList(jsonData);
	}
});

// Searchbox functionality

searchbox.style.padding = "0 10px";
searchbox.style.outline = "none";

searchbox.addEventListener("input", function (e) {
	// creating a filtered variable in which we store the filtered values depending o the searchbox value - we also have to add them to lowercase in order to be able to search everything - case sensitive
	const searchdata = jsonData.filter(function (articles) {
		return articles.description.toLowerCase().includes(searchbox.value);
	});
	// empty items list
	items.innerHTML = "";
	// create a list from the searched data and display it
	createList(searchdata);
});

// Creating the send button

// const sendButton = document.querySelector(".send-button");

// sendButton.addEventListener("click", function () {
// 	console.log("click");
// });

// Creating the cart

// jsonData.forEach(function(e) {
// 	cartButton.addEventListener('click', function() {
// 		console.log('click')
// 	})

// })

// cartButton.addEventListener('click', function addCartItems (e) {
// 	// console.log(this.parentElement)
// 	// let array = [];
// 	// array =+ array.push(this.parentElement)
// 	// console.log(array)

// const cartDiv = document.createElement('div');
// const artnr = document.createElement('li')
// const quantity = document.createElement('li');

// cartDiv.classList.add('cart-div')
// artnr.classList.add('cart-art')
// artnr.style.listStyleType="none"
// quantity.classList.add('cart-qty')

// if (e.target) {
// 	console.log();
// }

// cartDiv.append(artnr)
// cart.appendChild(cartDiv)
// });


const checkout = document.querySelector('.checkout')
const warenkorbButton = document.querySelector('.warenkorb-button')
// if (checkout)checkout.style.display = 'absolute';

warenkorbButton.addEventListener('click', function(e) {
	checkout.classList.toggle('hidden')
	items.classList.toggle('opacity')
	
	// window.addEventListener('click', function(e) {
	// 	if (!cart.contains(e.target)) {
	// 		console.log('out')
	// 	}
	// 	})
	
	// cart.addEventListener('click', function(e){ 
	// 	if(e.target !== checkout) {
	// 		console.log('it is not')
	// 	}
	// })
})



// function showCart() { 
// 	checkout.classList.remove('hidden')
// }

// document.addEventListener('click',function(e) {
// 	if (checkout.classList != "hidden") {
// 		console.log('this')only return once on clickto
// 	}
// });

// exit div on click function *** HAS TO BE WORKED ON!
// window.addEventListener('mouseup',function(event){
// 	event.preventDefault();
// 	const deleteButton = document.querySelector('.delete-button')
// 	const sendButton = document.querySelector('.send-button')

	// if(event.target != checkout && event.target != deleteButton && event.target != sendButton){
	// 	console.log(event.target)
	// 	checkout.classList.add ('hidden')
	// 	items.classList.remove('opacity')
	// }
// });  

	
// if(cartContainer.contains(cartDiv)) {
		
// }

// cart.addEventListener('click',function(event) {
// 	if(event.target !== this.parentElement) {
// 		checkout.classList.toggle('hidden')
// 		items.classList.toggle('opacity')
// 	}
// })

// const allProductsButton = document.querySelector('.all-products');

// allProductsButton.addEventListener('click',function() {
// 		 createList(data)
// 		 allProductsButton.textContent = "Liste leer"
// 		allProductsButton.addEventListener('click', function() {
// 			items.innerHTML = ""
// 		})
		 
// })

// createList(data)


///////////////////////////////////
// Tasks to work on:
// Optimising functions and code
// If clicked outside the cart, cart should close. 
// Fix some filter categories that are not showing
// Add items be pressing ENTER after typing in amount
// Next: Backend? Mailing feature
		// Mail should send a structured email to another email address, containing the items from the cart and the given projekt number.
	
// Another option for the cart
		// on each click, an item is added, but if it is added multiple times, increments and ( n ) <-- is added next to the description