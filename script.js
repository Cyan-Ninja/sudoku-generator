/* Main Script (JavaScript) */
var puzzleSize = 9; // Size of Puzzle; Can Be 4x4, 6x6, 9x9, or 16x16.
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

}
	/* Puzzle Steps */
	/*
		Get Alphabet --DONE
		Create Table With X, Y, Group, Fill, & Displayed
		For Each Item {
			While (!Found) {
				Choose Number From Alphabet
				Check X Coordinates If It Fits
				Check Y Coordinates If It Fits
				Check Group Coordinates If It Fits
				If Each Is True, Set The Fill
			}
		}
		Mark Random Coordinates For Display In Unanswered
		Display On Canvas
	*/
