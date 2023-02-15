/*slider img*/
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}


//Sign in form
let modal = document.getElementById('log_in');
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
function sign(sign_up) {
	if (sign_up.style.display == "none") {
		login_form.style.display = "none";
		sign_up.style.display = "block";
	}
	else {
		sign_up.style.display = "none";
	}
}
function disp(login_form) {
	if (login_form.style.display == "none") {
		login_form.style.display = "block";
		sign_up.style.display = "none";
	}
	else {
		login_form.style.display = "none";
	}
}