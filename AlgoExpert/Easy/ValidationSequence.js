function isValidSubsequence(array, sequence) {
  let arrayIdx = 0;
	let sequenceIdx = 0;
	while (arrayIdx < array.length && sequenceIdx < sequence.length) {
		if (array[arrayIdx] === sequence[sequenceIdx])
			sequenceIdx++;
			arrayIdx++
	}
	return sequenceIdx === sequence.length
}

//isValidSubsequence([1, 2, 3, 4, 5], [1, 2, 3]))
//output: true
