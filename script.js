function countVietnameseCharacters(input) {
  const viCharacters = /aw|aa|dd|ee|oo|ow|w/g;
  const matches = input.match(viCharacters);
  // console.log(matches);
  return matches ? matches.length : 0;
}

// Example usage
const input = "hfdawhwhcoomdd";
const result = countVietnameseCharacters(input);
console.log(result); // Output: 4
