import multer from 'multer';

export const uploadGeneric = (destination, extencion) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destination);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + req.user?.name + extencion);
    },
  });

  return multer({ storage });
}