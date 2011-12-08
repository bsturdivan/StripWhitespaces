function stripWhitespaces(element) {
	var el = element,
		elContent = el.innerHTML,
		whitespaces = elContent.replace(/[\s]+</g, '<'),
		newElement = el.cloneNode(false);
	
	newElement.innerHTML = whitespaces;
	return newElement;
}