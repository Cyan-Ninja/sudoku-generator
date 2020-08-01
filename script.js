/* Main Script (JavaScript) */
var puzzleSize = 9; // Size of Puzzle; Can Be 4x4, 6x6, 9x9, or 16x16
var puzzleTable = [];
function generatePuzzle() {
	// Get Alphabet From Puzzle Size
	var alphabet = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
	switch (puzzleSize) {
		case 4:
			alphabet = ["1", "2", "3", "4"];
			break;
		case 6:
			alphabet = ["1", "2", "3", "4", "5", "6"];
			break;
		case 9:
			alphabet = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
			break;
		case 16:
			alphabet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
			break;
		default:
			puzzleSize = 9;
			alphabet = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
	}
	console.log("Puzzle Size: " + puzzleSize + "×" + puzzleSize);
	// Create Table With X, Y, Group, Fill, & Displayed
	for (var xNum = 0; xNum < puzzleSize; xNum++) {
		for (var yNum = 0; yNum < puzzleSize; yNum++) {
			var groupX = Math.floor(xNum / Math.sqrt(puzzleSize));
			var groupY = Math.floor(yNum / Math.sqrt(puzzleSize));
			if (puzzleSize == 6) {
				groupX = Math.floor(xNum / 3);
				groupY = Math.floor(yNum / 2);
			}
			puzzleTable.push({x: xNum, y: yNum, gX: groupX, gY: groupY, f: "", d: false});
		}
	}
	console.log(puzzleTable);
	// Test With Backtrack

	}
}
	/* Puzzle Steps */
	/*
		Get Alphabet --DONE
		Create Table With X, Y, Group, Fill, & Displayed --DONE
		For Each Item { --DONE
			While (!Found) { --DONE
				Choose Number From Alphabet --DONE
				Check X Coordinates If It Fits --DONE
				Check Y Coordinates If It Fits --DONE
				Check Group Coordinates If It Fits --DONE
				If Each Is True, Set The Fill
			}
		}
		Mark Random Coordinates For Display In Unanswered
		Display On Canvas
	*/
