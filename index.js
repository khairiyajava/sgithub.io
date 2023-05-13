function login() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	if (username.trim() == "" || password.trim() == "") {
		alert("Please enter your username and password.");
	} else {
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
		alert("Login successful.");
	}
}