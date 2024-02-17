const searchInput = document.getElementById("search-input");
const suggestionsList = document.getElementById("suggestions-list");

const searchSuggestions = ["Latest Edition", "Shirts", "Hoodies"];

searchInput.addEventListener("input", function () {
  const userInput = searchInput.value.trim().toLowerCase();
  const suggestions = searchSuggestions.filter((country) =>
    country.toLowerCase().startsWith(userInput)
  );
  renderSuggestions(suggestions);
});

function renderSuggestions(suggestions) {
  suggestionsList.innerHTML = "";
  suggestions.forEach((suggestion) => {
    const li = document.createElement("li");
    li.textContent = suggestion;
    suggestionsList.appendChild(li);
  });

  if (suggestions.length > 0) {
    suggestionsList.style.display = "block";
  } else {
    suggestionsList.style.display = "none";
  }
}

document.addEventListener("click", function (e) {
  if (e.target !== searchInput) {
    suggestionsList.style.display = "none";
  }
});
