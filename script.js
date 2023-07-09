//your code here
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Radiohead'];

function sortBandNames(names) {
  // Define an array of articles to be excluded
  const articles = ['a', 'an', 'the'];

  // Remove articles from the band names and create a new array
  const sortedNames = names.map(name => {
    // Split the name into words
    const words = name.split(' ');

    // Filter out articles from the words
    const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));

    // Join the filtered words back into a single string
    return filteredWords.join(' ');
  });

  // Sort the band names in lexicographic order
  sortedNames.sort();

  // Get the 'band' ul element
  const bandList = document.getElementById('band');

  // Clear any existing content inside the 'band' ul element
  bandList.innerHTML = '';

  // Create list items and append them to the 'band' ul element
  sortedNames.forEach(name => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    bandList.appendChild(listItem);
  });
}

// Call the function with the band names array
sortBandNames(bandNames);

