var iterations = 0;
function SudokuCreate(maxNum) {
	var numSet = [];
	var sudokuArray = [];
	// Make Sudoku Puzzle Array
	for (var i = 1; i <= maxNum; ++i) {
		numSet.push(i);
		sudokuArray.push(new Array(maxNum));
	}
	// Size Of Sub Boxes
	var horizontalBoxSize = Math.floor(maxNum / Math.sqrt(maxNum)) + 1;
	var verticalBoxSize = Math.floor(maxNum / Math.sqrt(maxNum)) + 1;
	if (maxNum == 6) {
		horizontalBoxSize = Math.floor(maxNum / 3) + 1;
		verticalBoxSize = Math.floor(maxNum / 2) + 1;
	}
	var horizontalBoxSize = 3, verticalBoxSize = 3;

	// Place Numbers
	function placeNumber(num, arr) {
		var lastRowIndex = arr.length - 1, lastRow = arr[lastRowIndex], rowsToCheck = lastRowIndex % verticalBoxSize, safeIndexes = [], randomSafeIndex;
		// Find A Safe Column For The Number In The Current Row
		function findSafeIndex(boxesUsed) {
			// Check If The Current Number Can Fit In The Sub Box
			function boxSafe(index) {
				var indexBox = Math.floor(index / horizontalBoxSize); // Find Current Sub Box
				if (boxesUsed.indexOf(indexBox) >= 0) { // Make Sure It Fits In Sub Box
					return false;
				} else {
					return true;
				}
			}
			// Loop Through Row To Find Safe Spot For Number
			for (var indexInLastRow = 0, rowLen = lastRow.length; indexInLastRow < rowLen; ++indexInLastRow) {
				var columnSafe = true;
				// Make Certain The Current Number Isn't Used
				for (var rowIndex = arr.length - 1; rowIndex >= 0; --rowIndex) {
					if(arr[rowIndex][indexInLastRow] === num) {
						columnSafe = false;
					}
				}
				// Make Certain The Current Item Is Empty, And Correct Column And Row
				if(lastRow[indexInLastRow] === undefined && columnSafe && boxSafe(indexInLastRow)) {
					safeIndexes.push(indexInLastRow);
				}
			}
			// Return A Safe Item For The Current Number
			return safeIndexes[Math.floor(Math.random() * safeIndexes.length)];
		}

		var horizontalBoxesUsed = []; // Records The Sub Boxes Used

		// If Not In First Row Of Sub Box, Loop Through Other Rows To Find Unused Sub Boxes
		if (rowsToCheck > 0) {
			for (var i = rowsToCheck; i > 0; --i) {
				var horizontalBox = Math.floor(arr[lastRowIndex - i].indexOf(num) / horizontalBoxSize);
				horizontalBoxesUsed.push( horizontalBox );
			}
		}

		//get a safe index to put the number in to the row
		randomSafeIndex = findSafeIndex(horizontalBoxesUsed);

		//if there are no safe indexs return the number
		if(randomSafeIndex === undefined) {
			return num;
		} else {//else if there are safe indexs add the number to an index in the row and return true
			lastRow[randomSafeIndex] = num;
			return true;
		}
	}

	// Loop Through Numbers To Set
	for (var i = numSet.length - 1; i >= 0; --i) {
		var workingArray = []; // Hold Rows Being Worked With
		var possible = true;
		while (sudokuArray.length > 0) { // While Rows Need To Be Processed
			workingArray.push(sudokuArray.shift()); // Add Row To The Working Array

			possible = placeNumber(numSet[i], workingArray); // Set The Current Number Into The Array To Find If The Puzzle Is Possible

			if(possible !== true) { // If Not Possible To Create, Try Again
				++iterations;
				return SudokuCreate(maxNum);
			}
		}

		// Set The Array Once Finished
		sudokuArray = workingArray;
	}

	console.log("Iterations Taken: " + iterations);
	//console.table(sudokuArray);
	return sudokuArray; // Return Full Array Just For Clean Code
}
function displayCanvas() {
	// DISPLAY CANVAS CODE
}
