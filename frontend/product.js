const API = "http://localhost:3000/api";

const token =
localStorage.getItem("token");

document
.getElementById("productForm")
.addEventListener("submit", async (e) => {

e.preventDefault();

const productName =
document.getElementById(
"productName"
).value;

const category =
document.getElementById(
"category"
).value;

const price =
document.getElementById(
"price"
).value;

const quantity =
document.getElementById(
"quantity"
).value;

const threshold =
document.getElementById(
"threshold"
).value;

try{

const response =
await fetch(
`${API}/products`,
{
method:"POST",
headers:{
"Content-Type":
"application/json",
Authorization:
`Bearer ${token}`
},
body:JSON.stringify({
productName,
category,
price,
quantity,
threshold
})
}
);

const data =
await response.json();

if(response.ok){

document.getElementById(
"message"
).innerHTML =
"✅ Product Added";

document
.getElementById(
"productForm"
)
.reset();

}else{

document.getElementById(
"message"
).innerHTML =
data.message;

}

}catch(error){

console.log(error);

}

});