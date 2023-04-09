// Create the friends array
const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Loop through the array and log the song lyrics for each friend
for (let i = 0; i < friends.length; i++) {
  console.log(`\n\n${friends[i]}:`); // Log friend's name
  for (let j = 99; j > 0; j--) {
    if (j === 1) {
      console.log(`1 line of code in the file, 1 line of code; ${friends[i]} strikes it out, clears it all out, no more lines of code in the file`);
    } else {
      console.log(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} lines of code in the file`);
    }
  }
}
