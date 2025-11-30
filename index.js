function removeNamesWithLetter(arr, letter) {
  const filtered = arr.filter(function(name) {
    return !name.toLowerCase().includes(letter.toLowerCase());
  });
  return filtered;
}


console.log(removeNamesWithLetter(["Nick", "Ana", "Tako"], "i"));


const names = ["Mary", "Luka", "Levan", "Tako", "Giorgi", "Ana", "Salome"];
console.log(names);

const result = removeNamesWithLetter(names, "a");
console.log(result);