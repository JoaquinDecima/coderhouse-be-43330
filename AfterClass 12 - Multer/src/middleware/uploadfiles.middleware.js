import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/documents')
  },
  filename: function (req, file, cb) {
    cb(null, req.user?.name + file.originalname);
  }
})

export const uploadFiles = multer({ storage: storage })