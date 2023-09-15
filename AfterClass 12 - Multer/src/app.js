import express from 'express';
import multer from 'multer';
import { uploadFile } from './middleware/uploadfile.middleware.js';
import { uploadFiles } from './middleware/uploadfiles.middleware.js';
import { uploadGeneric } from './middleware/uploadgeneric.middleware.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.post('/v1/uploadfile', uploadFile.single('avatar'), (req, res) => {
    console.log(req.file);
    res.send('File uploaded successfully');
});

app.post(
  "/v2/uploadfile",
  uploadGeneric("public/img/profiles", ".jpg").single("avatar"),
  (req, res) => {
    console.log(req.file);
    res.send("File uploaded successfully");
  }
);

app.post(
  "/v3/uploadfile",
  multer({ dest: "public/img/profiles" }).single("avatar"),
  (req, res) => {
    console.log(req.file);
    res.send("File uploaded successfully");
  }
);

app.post("/v1/uploadfiles", uploadFiles.array('documents', 3), (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send('Files uploaded successfully');
});

app.post(
  "/v2/uploadfiles",
  uploadGeneric("public/documents", ".pdf").array("documents", 3),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("Files uploaded successfully");
  }
);

app.post("/v3/uploadfiles", multer({ dest: "public/documents" }).array("documents", 3), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send("Files uploaded successfully");
});

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
