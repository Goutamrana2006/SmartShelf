const API = "http://localhost:3000/api";

// JWT Token from Login
const token = localStorage.getItem("token");


// ======================
// Dashboard Stats
// ======================

async function loadDashboard() {

    try {

        const response = await fetch(
            `${API}/products/dashboard/stats`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        document.getElementById("totalProducts").innerText =
            data.totalProducts;

        document.getElementById("totalStock").innerText =
            data.totalStock;

        document.getElementById("lowStock").innerText =
            data.lowStock;

        document.getElementById("totalCategories").innerText =
            data.totalCategories;

    }
    catch (error) {

        console.log(error);

    }

}


// ======================
// Load Products
// ======================

async function loadProducts() {

    try {

        const response = await fetch(
            `${API}/products`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const products = await response.json();

        const table = document.getElementById("productTable");

        table.innerHTML = "";

        products.forEach(product => {

            let status;

            if (product.quantity <= product.threshold) {

                status =
                    `<span class="low">⚠ Low Stock</span>`;

            } else {

                status =
                    `<span class="available">✅ Available</span>`;

            }

            table.innerHTML += `
                <tr>
                    <td>${product.productName}</td>
                    <td>${product.category}</td>
                    <td>₹ ${product.price}</td>
                    <td>${product.quantity}</td>
                    <td>${status}</td>

 <td>
    <button onclick="editProduct(
        '${product._id}',
        \`${product.productName}\`,
        \`${product.category}\`,
        '${product.price}',
        '${product.quantity}',
        '${product.threshold}'
    )">
        ✏️ Edit
    </button>

    <button onclick="deleteProduct('${product._id}')">
        🗑️ Delete
    </button>
</td>
                </tr>
            `;

        });

    }
    catch (error) {

        console.log(error);

    }

}


// ======================
// Delete Product
// ======================

async function deleteProduct(id) {

    const confirmDelete =
        confirm("Delete this product?");

    if (!confirmDelete) return;

    try {

        const response = await fetch(
            `${API}/products/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        alert(data.message);

        loadProducts();
        loadDashboard();

    }
    catch (error) {

        console.log(error);

    }

}
async function editProduct(
    id,
    productName,
    category,
    price,
    quantity,
    threshold
){

    const newName =
    prompt("Product Name", productName);

    if(!newName) return;

    const newCategory =
    prompt("Category", category);

    const newPrice =
    prompt("Price", price);

    const newQuantity =
    prompt("Quantity", quantity);

    const newThreshold =
    prompt("Threshold", threshold);

    try{

        const response =
        await fetch(
            `${API}/products/${id}`,
            {
                method:"PUT",

                headers:{
                    "Content-Type":
                    "application/json",

                    Authorization:
                    `Bearer ${token}`
                },

                body:JSON.stringify({

                    productName:newName,
                    category:newCategory,
                    price:newPrice,
                    quantity:newQuantity,
                    threshold:newThreshold

                })

            }
        );

        const data =
        await response.json();

        alert(data.message);

        loadProducts();
        loadDashboard();

    }
    catch(error){

        console.log(error);

    }

}

// ======================
// Initial Load
// ======================

loadDashboard();
loadProducts();
function logout() {

    localStorage.removeItem("token");

    window.location.href = "login.html";

}