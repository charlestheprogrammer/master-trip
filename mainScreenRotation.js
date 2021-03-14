function portrait() {
	var element = document.getElementById('mainScreen');
	if (!element.classList.contains("portrait")) {
		element.classList = ['portrait'];
		element.setAttribute('src', 'landscape.png');
	}
}

function landscape() {
	var element = document.getElementById('mainScreen');
	if (element.classList.contains("portrait")) {
		element.classList = ['landscape']
		element.setAttribute('src', 'portrait.png');
	}
}