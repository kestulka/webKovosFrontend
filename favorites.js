function addToFavorites(imageUrl) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.includes(imageUrl)) {
    favorites.push(imageUrl);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Image added to favorites!");
  } else {
    alert("Image is already in favorites!");
  }
}

function displayFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const favoritesContainer = document.getElementById("favorites-container");
  favoritesContainer.innerHTML = "";

  favorites.forEach((imageUrl) => {
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = "Favorite Image";
    favoritesContainer.appendChild(imageElement);
  });
}
