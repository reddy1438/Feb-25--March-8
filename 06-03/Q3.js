function Even(L, R)
{
	
	// Base case
	if (R < L)
	{
		return;
	}
	
	// Recurrence relation
	if (R % 2 == 0 )
	{
		Even(L, R - 2);
	}
	else
	{
		Even(L, R - 1);
	}
	
	// Check if R is even
	if (R % 2 == 0)
	{
		document.write(R + " ");
	}
}

let L =2;
let R = prompt("Enter the number");
document.write("Even numbers:");
Even(L,R);
document.write("<br>");