const username = document.getElementById("username")
const userEmail = document.getElementById("userEmail")
const userPassword = document.getElementById("userPassword")
const projektNummer = document.getElementById("projektnummer")


const obj = { 
    type: "object",
    number: 5,
    location: { 
        x:1,
        y:2,
    }
}

const newObj = obj.map(obj => {
    let {type} = type;
    type = type + "!"
})
console.log(newObj)