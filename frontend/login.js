const API = "http://localhost:3000/api";

document
.getElementById("loginForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try {

        const response = await fetch(
            `${API}/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type":
                    "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data =
        await response.json();

        if(response.ok){

            localStorage.setItem(
                "token",
                data.token
            );

            document.getElementById(
                "message"
            ).innerHTML =
            "✅ Login Successful";

            setTimeout(()=>{

                window.location.href =
                "index.html";

            },1000);

        }else{

            document.getElementById(
                "message"
            ).innerHTML =
            "❌ Invalid Credentials";

        }

    } catch(error){

        console.log(error);

    }

});