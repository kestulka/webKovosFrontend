const token = "10574af0b2fe4401bbeab87cee142707";
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  try {
    const response = await fetch("http://172.16.50.58:5000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      alert("login sucessfull");
      window.location.href = "http://localhost:3000/";
    } else {
      alert("Invalid credentials");
    }
  } catch (error) {
    alert("Error logging in:", error.message);
  }
});
