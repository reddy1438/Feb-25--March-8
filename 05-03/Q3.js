function checkWord(board, word, index, row, col)
{
	
	
	if (row < 0 || col < 0 ||
		row >= board.length ||
		col >= board[0].length)
		return false;
	
	
	if (board[row][col] !== word[index])
		return false;
		
	
	else if (index === word.length - 1)
	
		// Return true as word is found
		return true;
	
	var temp = board[row][col];
	
	board[row][col] = "*";
	
	
	if (checkWord(board, word,
				index + 1, row + 1, col) ||
		checkWord(board, word,
				index + 1, row - 1, col) ||
		checkWord(board, word,
				index + 1, row, col + 1) ||
		checkWord(board, word,
				index + 1, row, col - 1))
	{
		board[row][col] = temp;
		return true;
	}
	
	
	board[row][col] = temp;
	return false;
}


var board = [ [ "A", "B", "C", "E" ],
			[ "S", "F", "C", "S" ],
			[ "A", "D", "E", "E" ],];
var word = "CFDASABCESEE";
var f = 0;

for(var i = 0; i < board.length; i++)
{
	for(var j = 0; j < board[0].length; j++)
	{
		if (board[i][j] === word[0] &&
			checkWord(board, word, 0, i, j))
		{
			document.write("True");
			f = 1;
		}
	}
	if (f === 1)
	{
		i = board.length + 1;
	}
}
if (f === 0)
{
	document.write("False");
}
