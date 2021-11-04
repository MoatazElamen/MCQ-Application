const shuffle = (array)=>{ // Fisher-Yates-Knuth shuffle algorithm
  let currentIndex = array.length;
  while (currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
module.exports = shuffle;