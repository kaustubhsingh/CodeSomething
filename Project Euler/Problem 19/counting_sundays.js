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
	var day_of_week = 1, day_of_month = 1, month = 1, year = 1900, sundays = 0;
	
	while (day_of_month != 31 || month != 12 || year != 2000)
	{
		//console.log("running loop");
		day_of_week++;
		if (day_of_week > 7) day_of_week = 1;
		
		day_of_month++;
		if (month != 2)
		{
			if (day_of_month > month_days[month])
			{
				day_of_month = 1;
				month++;
			}
		}
		else
		{
			if (day_of_month > febDays(year))
			{
				day_of_month = 1;
				month++;
			}			
		}
		
		if (month > 12)
		{
			month = 1;
			year++;
			console.log(year);
		}
		
		if (year > 1900)
		{
			if (day_of_week == 7 && day_of_month == 1)
			{
				sundays++;
			}  
		}
	}
	return sundays;
}

console.log(loop20thCentury())
