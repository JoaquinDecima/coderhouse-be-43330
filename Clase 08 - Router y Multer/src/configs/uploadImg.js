import multer from 'multer';

// Creo un Storage para manejar los archivos
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/img'); // Seteo capeta de destino
	},
	filename: function (req, file, cb) {
		const date = new Date();
		// Seteo nombre del archivo
		cb(null, `${date.getTime()}-${req.body.type}-${req.body.name}.png`);
	},
});

// Exporto un nuevo multer usando el storage definido
export const imgUploader = multer({ storage });
