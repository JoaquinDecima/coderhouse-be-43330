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

var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

function setCookie(name, value) {
	document.cookie =
		name +
		'=' +
		escape(value) +
		'; path=/; expires=' +
		expiry.toGMTString();
}
function putCookie(form) {
	//this should set the UserName cookie to the proper value;
	setCookie('userName', form[0].usrname.value);

	return true;
}
