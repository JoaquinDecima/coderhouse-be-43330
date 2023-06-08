async function getCookies() {
	const response = await fetch('/cookies/get');
	const jsonData = await response.json();
	console.log(jsonData);
}
