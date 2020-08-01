def generate_solution(self, grid):
    """generates a full solution with backtracking"""
    number_list = [1,2,3,4,5,6,7,8,9]
    for i in range(0,81):
        row=i//9
        col=i%9
        #find next empty cell
        if grid[row][col]==0:
            shuffle(number_list)
            for number in number_list:
                if self.valid_location(grid,row,col,number):
                    self.path.append((number,row,col))
                    grid[row][col]=number
                    if not self.find_empty_square(grid):
                        return True
                    else:
                        if self.generate_solution(grid):
                            #if the grid is full
                            return True
            break
    grid[row][col]=0
    return False
function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}
function generateSolution(self, puzzleTable) {
	for (var i = 0; i < this.puzzleTable.length; i++) {
		row = puzzleTable[i].x;
		col = puzzleTable[i].y;
		if (puzzleTable[i].f == "") {
			alphabet = shuffle(alphabet);
			for (var alpha = 0; alpha < alphabet.length; alpha++) {
				if (checkItem.x == item.x) {
					if (checkItem.f == tryLetter) {
						isOkay = false;
					}
				}
				if (checkItem.y == item.y) {
					if (checkItem.f == tryLetter) {
						isOkay = false;
					}
				}
				if (checkItem.gX == item.gX && checkItem.gY == item.gY) {
					if (checkItem.f == tryLetter) {
						isOkay = false;
					}
				}
			}
		}
	}
}
