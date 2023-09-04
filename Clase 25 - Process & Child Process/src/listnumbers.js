const numbers = process.argv.slice(2);

process.on('exit', (code) => {
	console.log(`El proceso terminó con el código ${code}`);
	if (code === 4) {
		console.log('Hubo un error en los parámetros');
	}
});

const types = numbers.map((number) => {
	try {
		return typeof eval(number);
	} catch (error) {
		return typeof 'string';
	}
});

if (types.find((type) => type !== 'number')) {
	process.exit(4);
}
