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
const user1 = new User("ask", 1234);
const user2 = new User("jcl", 1234);

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
        password.value == user1.password &&
        projektnummerInput.value.length == 7
      ) {
        console.log("success");
        document.querySelector(".login-container").classList.add("hidden");
        // document.querySelector(".checkout").classList.remove("hidden");
        document.querySelector(".item-container").classList.remove("hidden");
        // welcome note
        welcome.classList.add("opacity");
        // when loaded, should exit on click
        welcome.addEventListener("click", function () {
          welcome.classList.add("opacity-fadeout-effect");
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
        const addToCartButton = document.createElement("button");

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
        value.classList.add("value");

        minusButton.classList.add("cart-button");
        minusButton.innerHTML = `<i class="fa-sharp fa-solid fa-minus"></i>`;

        button.classList.add("cart-button");
        button.innerHTML = `<i class="fa-regular fa-plus"></i>`;

        addToCartButton.classList.add("cart-button");
        addToCartButton.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
        addToCartButton.style.marginLeft = "15px";

        div.appendChild(articles);
        div.append(descriptions);
        div.append(supplier);
        div.append(type);
        div.append(use);
        div.append(button);
        button.prepend(value);
        button.prepend(minusButton);
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
          } else if (event.target.classList == "fa-sharp fa-solid fa-minus") {
            value.value--;
          }
          // if the cart button is clicked, create cart items and increase the quantity
          else if (
            event.target.classList == "fa-solid fa-cart-shopping" &&
            value.value !== ""
          ) {
            const cartDiv = document.createElement("div");
            const cartArtnr = document.createElement("li");
            const cartArtDescr = document.createElement("li");
            const deleteButton = document.createElement("button");
            const total = document.createElement("div");

            cartDiv.classList.add("cart-div");
            // create art number and append it - according to the event listener
            cartArtnr.innerHTML = array[i].artnr;
            cartArtnr.classList.add("cart-item");
            // create description and append it - according to the event listener
            cartArtDescr.innerHTML =
              array[i].description + ` <strong>(${value.value})</strong>`;

            cartArtDescr.classList.add("cart-art-description");
            // create the delete button and append it
            deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
            deleteButton.classList.add("delete-button");

            // total.innerHTML = `<p>Total Artikel: </p>`
            total.classList.add("total");

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
              if (itemQty.textContent === "0") {
                checkout.classList.add("hidden");
                items.classList.remove("opacity");
                document
                  .querySelector(".item-container")
                  .removeChild(document.querySelector(".overlay"));
              }
            });

            // update quantity and reset input value when a new item is added to the cart
            itemQty.textContent++;
            itemQtyWk.textContent++;
            value.value = "";
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

        createList(jsonData);
        window.hasLoadedList = true;
      }
    });

    homeButton.addEventListener("click", function (e) {
      document
        .querySelector(".dropdown-lists-container")
        .classList.add("hidden");
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
