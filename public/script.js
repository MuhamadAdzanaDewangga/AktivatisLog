fetch("https://your-railway-backend-url.onrender.com")
    .then(response => response.text())
    .then(data => {
        document.getElementById("status").innerText = data;
    })
    .catch(error => {
        document.getElementById("status").innerText = "Error fetching API";
        console.error(error);
    });
