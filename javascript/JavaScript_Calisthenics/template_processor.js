

function TemplateProcessor(template) {
	this.template = template;
}

TemplateProcessor.prototype.fillIn = function() {
	
}


// ground work


function catchBrackets(str){
	
	return str.match(/{{[^{{]*}}/g);
	
}

function replaceBrackets(str, str2){
	
	return str.replace(/{{[^{{]*}}/g, str2);
	
}

console.log(replaceBrackets("My fav month is {{month}}", "March"));
