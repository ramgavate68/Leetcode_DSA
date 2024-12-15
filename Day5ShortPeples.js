const shortPepols = (names, heights) => {
    const paired = names.map((name, index) => ({ name, height: heights[index] }));
    const sorted = paired.sort((a, b) => b.height - a.height);
    return sorted.map(person => person.name);
    
};
const names = ["Mary", "John", "Emma"],
  heights = [180, 165, 170];
const res = shortPepols(names, heights);
console.log(res);
