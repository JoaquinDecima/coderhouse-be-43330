function llamarABack() {
	fetch('http://localhost:8080/api')
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
		});
}

llamarABack();
