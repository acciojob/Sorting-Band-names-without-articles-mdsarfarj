// Given array of band names
let bandNames = ['The Beatles', 'Metallica', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones'];

// Function to sort and display band names without articles
function sortAndDisplayBands(bandNames) {
  const articles = ['a', 'an', 'the'];

  const sortedBands = bandNames.slice().sort((a, b) => {
    const getNameWithoutArticle = name => {
      for (const article of articles) {
        if (name.toLowerCase().startsWith(article + ' ')) {
          return name.slice(article.length + 1);
        }
      }
      return name;
    };

    const nameA = getNameWithoutArticle(a);
    const nameB = getNameWithoutArticle(b);

    return nameA.localeCompare(nameB);
  });

  const ulElement = document.getElementById('band');

  sortedBands.forEach(band => {
    const liElement = document.createElement('li');
    liElement.textContent = band;
    ulElement.appendChild(liElement);
  });
}

// Call the function with the band names array
sortAndDisplayBands(bandNames);
