# usage: ruby maximum_path_sum_1.rb <input file>

start_time = Time.new

triangle = File.read(ARGV[0]).to_str
max_level = triangle.count("\n")
triangle = triangle.split(/ |\n/)

triangle.each do |x|
	x.to_i
end

#puts triangle

def max_local(a, b)
	if a > b
		return a
	else
		return b
	end
end

puts max_level

def max_path_sum(triangle, level, index, max_level)

	if level > max_level
		return 0
	end 
	
	max_sum = 0;
	new_level = level + 1;

	rest =   	max_local(max_path_sum(triangle, new_level, index, max_level),
							max_path_sum(triangle, new_level, index + 1, max_level))	

	max_sum = triangle[index -1 + (level - 1) * level / 2].to_i + rest
	
	return max_sum;
end

puts max_path_sum(triangle, 1, 1, max_level)

puts "Time taken in ms: #{(Time.new - start_time) * 1000}"
