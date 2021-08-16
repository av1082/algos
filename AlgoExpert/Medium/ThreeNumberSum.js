function threeNumberSum(array, targetSum) {
	array = array.sort((a, b) => a-b)
  let answer = [];
  for (let i = 0; i < array.length-1; i++) {
    let left = i + 1;
    let right = array.length-1
    while (left < right) {
      let sum = array[i]+ array[left] + array[right]
      if (sum === targetSum) {
        answer.push([array[i], array[left], array[right]])
        left++
        right--
      } else if (sum < targetSum) {
        left++
      } else if (sum > targetSum) {
        right--
      }
    }
  }
  return answer;
}

let sample = [12, 3, 1, 2, -6, 5, -8, 0]
let sum = 0

console.log(threeNumberSum(sample, sum))
//output: [[-8, 3, 5], [-6, 1, 5]]
