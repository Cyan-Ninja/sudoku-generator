    var iterations = 0;
    function SudokuCreate(maxNum) {
        //generate number set
        var numSet = [];
        var sudokuArray = [];

        //populates number set and files sudoku with the rows and columns it needs
				for (var i = 1; i <= maxNum; ++i) {
            numSet.push(i);
            sudokuArray.push(new Array(maxNum));
        }
				var numSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
				switch (maxNum) {
					case 4:
						numSet = ["1", "2", "3", "4"];
						break;
					case 6:
						numSet = ["1", "2", "3", "4", "5", "6"];
						break;
					case 9:
						numSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
						break;
					case 16:
						numSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
						break;
					default:
						maxNum = 9;
						numSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
				}

        //size of sub boxes, figure out more dynamic way to set this
				var horizontalBoxSize = Math.floor(maxNum / Math.sqrt(maxNum));
				var verticalBoxSize = Math.floor(maxNum / Math.sqrt(maxNum));
				if (maxNum == 6) {
					horizontalBoxSize = Math.floor(maxNum / 3);
					verticalBoxSize = Math.floor(maxNum / 2);
				}
        var horizontalBoxSize = 3,
            verticalBoxSize = 3;

        //find random number from 0 to max number, expludes max
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        //places numbers in the sudoku array
        function placeNumber(num, arr) {
            var lastRowIndex = arr.length - 1, //the index of the last row in the working array
                lastRow = arr[lastRowIndex], //the reference to the last row
                rowsToCheck = lastRowIndex % verticalBoxSize, //find what row of the sub box we are in vertically
                safeIndexes = [], //find which column is save to put a number in to
                randomSafeIndex; //pick one of the columns to place the number into from the safeIndexes array

            //used to find a safe column to place the number in the current row
            function findSafeIndex(boxesUsed) {
                //looks at previous rows if inside the sub box to see if the current number can be placed in the sub box
                function boxSafe(index) {
                    var indexBox = Math.floor(index / horizontalBoxSize);//finds which sub box the current index is in
                    if (boxesUsed.indexOf(indexBox) >= 0) {//checks to see if the current index's sub box has already been used
                        return false;
                    } else {
                        return true;
                    }
                }

                //loop through the current row to find a safe place to put the number
                for (var indexInLastRow = 0, rowLen = lastRow.length; indexInLastRow < rowLen; ++indexInLastRow) {
                    var columnSafe = true; //assume the current column is safe

                    //make sure the current number isn't already used in this column
                    for (var rowIndex = arr.length - 1; rowIndex >= 0; --rowIndex) {
                        if(arr[rowIndex][indexInLastRow] === num) {
                            columnSafe = false;
                        }
                    }

                    //make sure current index is empty, column is safe, and that current box is safe
                    if(lastRow[indexInLastRow] === undefined && columnSafe && boxSafe(indexInLastRow)) {
                        safeIndexes.push(indexInLastRow);
                    }
                }

                //return a safe index to be used for the current number
                return safeIndexes[getRandomInt(safeIndexes.length)];
            }

            var horizontalBoxesUsed = []; //records which sub box has been used, in the current sub box row

            //if we are not if the first row of the sub box, loop through the other rows to see which subboxes have been used
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

        //loop through the numbers to set them in the sudoku
        for (var i = numSet.length - 1; i >= 0; --i) {
            var workingArray = [];//holds the rows we are currently working with and/or have already wored with
            var possible = true;//is the sudoku even possible?
            while (sudokuArray.length > 0) {//while there are rows in the sudokuArray have have been been processed keep looping
                workingArray.push(sudokuArray.shift());//add a row to the working array from the sudoku array

                possible = placeNumber(numSet[i], workingArray);//place the current working number in to the working array, to find out if the sudoku puzzle is possible

                if(possible !== true) {//if its not possible generate a new sudoku puzzle
                    ++iterations;
                    return SudokuCreate(maxNum);
                }
            }

            //make the sudoku array equal to the working array when we're done
            sudokuArray = workingArray;
        }

        console.log(iterations);
        console.table(sudokuArray);
        return sudokuArray;//return our array to start to do some sudoku
    }

    SudokuCreate(16);//make a 9x9 sudoku
