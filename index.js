function validateEmail() {
	const emailInput = document.getElementById("email");
	const form = document.getElementById("form");
	const emailError = document.getElementById("emailError");
	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	const screenWidth = screen.width;
	const errorText = "Please enter a valid email address.";
	const emptyEmailText = "Please enter your email address.";
	const email = emailInput.value;
	if (email.match(pattern)) {
		emailError.style.display = "none";
		emailInput.style.borderColor = "hsl(223, 100%, 88%)";
	} else if (email === "") {
		emailError.textContent = emptyEmailText;
		emailError.style.display = "block";
		
		emailInput.style.borderColor = "red";
	} else {
		emailError.textContent = errorText;
		emailError.style.display = "block";
		emailInput.style.borderColor = "red";
	}
}
document.getElementById("form").addEventListener("submit", function (event) {
	event.preventDefault();
	validateEmail();
});
