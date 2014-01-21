#!/usr/bin/env node

month_days = { 1 : 31, 3 : 31, 4 : 30, 5 : 31, 6 : 30, 
			  7 : 31, 8 : 31, 9 : 30, 10 : 31, 11 : 30, 12 : 31 };
			  
function isLeapYear(year)
{
	if (year % 4 == 0)
	{ 
		if (year % 100 != 0)
		{
			return true;
		}
		else
		{
			if (year % 400 == 0)
			{
				return true;
			}
		}
	}
	
	return false;
}

function febDays(year)
{
	if (isLeapYear(year) == true)
	{
		return 29;
	}
	else
	{
		return 28;
	}
}

function loop20thCentury()
{
	var day = 1, month = 1, year = 1901;
	
	while (day != 31 && month != 12 && year != 2000)
	{
		
		
	}
}
