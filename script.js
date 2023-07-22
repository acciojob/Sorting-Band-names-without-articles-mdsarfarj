function removeArticles(name) {
  // Convert the name to lowercase and remove any leading/trailing whitespaces
  const lowercaseName = name.toLowerCase().trim();

  // Define an array of articles to remove
  const articles = ["a ", "an ", "the "];

  // Check if the name starts with any of the articles
  for (const article of articles) {
    if (lowercaseName.startsWith(article)) {
      // Remove the article from the name and return the result
      return name.slice(article.length);
    }
  }

  return name; // If no article is found, return the original name
}

function sortAndDisplayBands(bands) {
  // Sort the bands in lexicographic order after removing articles
  const sortedBands = bands.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);

  // Get the <ul> element by its id
  const bandList = document.getElementById("band");

  // Clear any existing content in the <ul> element
  bandList.innerHTML = "";

  // Create <li> elements for each band and append them to the <ul>
  sortedBands.forEach((band) => {
    const li = document.createElement("li");
    li.textContent = band;
    bandList.appendChild(li);
  });
}

// Test data (array of band names)
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Aerosmith', 'The Beatles', 'Nirvana', 'Pink Floyd'];

// Call the function to sort and display the bands
sortAndDisplayBands(bandNames);
