async function generateLogo() {
  const theme = document.getElementById("themeInput").value;
  const brand = document.getElementById("brandInput").value;

  // Example of authorization token
  const token = "10574af0b2fe4401bbeab87cee142707";

  try {
    const response = await fetch("http://172.16.50.58:5000/api/v1/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ prompt: theme, brand: brand }),
    });

    const logoData = await response.json();

    const logoContainer = document.getElementById("logo-container");
    logoContainer.innerHTML = `<img src="${logoData.imageUrl}" alt="Generated Image">`;
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

const generateButton = document.getElementById("generateBtn");
generateButton.addEventListener("click", (event) => {
  event.preventDefault();
  generateLogo();
});
