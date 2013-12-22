var power_digit_sum = function(power) {
	
	var digits = [];
	
	for (i = 0; i <= power; ++i)
	{
		var dummy = [];
		
		if (i == 0)
		{
			digits.push(1);
			continue;
		}
		
		var carry = 0, num_digits = digits.length;
		
		for (j = 0; j < num_digits; ++j)
		{
			var dig = digits.pop();
			var new_dig = dig * 2 + carry;
			
			if (new_dig < 9)
			{
				dummy.unshift(new_dig);
				carry = 0;
			}
			else
			{
				dummy.unshift(new_dig % 10);
				carry = Math.floor(new_dig / 10);
				
				if (digits.length == 0)
				{
					//console.log(carry);
					dummy.unshift(carry);
				}
			}
		}
		//console.log(dummy);
		digits = dummy.slice(0);
	}
	
	var sum = 0;
	for (k = 0; k < digits.length; ++k)
		sum = sum + digits[k];
	
	return sum;
}

console.log(power_digit_sum(1000));
