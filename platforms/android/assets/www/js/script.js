//document.ready equivilent
document.addEventListener('DOMContentLoaded', function() {

	var navbar = document.getElementById("nav");
	var toggle = document.getElementById("toggle");

	toggle.addEventListener('click', function() {
		var isOpen = nav.classList.contains("slide-in");
		navbar.setAttribute('class', isOpen ? 'nav slide-out' : 'nav slide-in');
	});

});
