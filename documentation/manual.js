function setupAccordions() {
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	}
}

function populate(source) {
	var manBody = document.getElementsByClassName("manbody")[0];
	
	source.forEach(function(section) {
		let title = section.title;
		let id = section.id;
		let elements = section.chapters;
		
		let sectionDiv = document.createElement("div");
		sectionDiv.classList.add("section");
		sectionDiv.setAttribute("id", id);
		manBody.appendChild(sectionDiv);
		
		let h1title = document.createElement("h1");
		h1title.innerHTML = title;
		sectionDiv.appendChild(h1title);
		
		
		elements.forEach(function(element) {
			
			let title = element.title;
			let content = element.content
			
			let button = document.createElement("button");
			button.classList.add("accordion");
			button.innerHTML = title;
			
			sectionDiv.appendChild(button);
			
			let panel = document.createElement("div");
			panel.classList.add("panel");
			panel.innerHTML = content;
			
			sectionDiv.appendChild(panel);
			
		})
		
		
	})
	
	setupAccordions();
}



function loadContent() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "../manual.json", true);
	xhr.responseType = 'json';
	xhr.onload = function() {
		var status = xhr.status;
		if (status === 200) {
			console.log(xhr.response);
			populate(xhr.response);
		} else {
			console.log(status);
		}
	};
	xhr.send();
}