let bandNames = ['The Beatles', 'Metallica', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones'];

function removeArticles(name) {
  const articles = ['a', 'an', 'the'];
  const words = name.split(' ');

  // Filter out articles and return the remaining words as a string
  return words.filter(word => !articles.includes(word.toLowerCase())).join(' ');
}

function sortAndDisplayBands(bands) {
  const sortedBands = bands.slice().sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);
  const ulElement = document.getElementById('band');

  // Clear existing list content
  ulElement.innerHTML = '';

  // Create and append list items for each band
  sortedBands.forEach(band => {
    const liElement = document.createElement('li');
    liElement.textContent = band;
    ulElement.appendChild(liElement);
  });
}

// Call the function to sort and display the bands
sortAndDisplayBands(bandNames);
