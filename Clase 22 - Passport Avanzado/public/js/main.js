function login() {
	const username = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const data = { username, password };

	fetch('/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			alert(document.cookie);
			window.location.href = '/private';
		})
		.catch((error) => {
			console.error('Error:', error);
			alert(error);
		});
}
