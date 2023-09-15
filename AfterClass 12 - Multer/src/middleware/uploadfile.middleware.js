import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/profiles')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + req.user?.name + '.jpg')
  }
})

export const uploadFile = multer({ storage: storage })