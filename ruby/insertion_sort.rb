list = [3, 5, 1, 45, 6, 23, 19]

def insertion_sort(list)

	# iterate over array starting from index 1
	list[1..(list.size - 1)].each_with_index do |x, i|
		j = i
		list[0..j].reverse_each do |k|
			break unless k > x
			list[j + 1] = k
			j = j - 1
		end
		
		# insert the item in sorted array
		list[j + 1] = x
	end
end

puts "Sorted list:"
insertion_sort list
puts list
	
				
	 
