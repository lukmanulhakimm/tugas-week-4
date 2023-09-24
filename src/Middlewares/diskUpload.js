const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img");
  },
  filename: (req, file, cb) => {
    const customFileName = `${file.fieldname}-${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, customFileName);
  },
});
const diskUpload = multer({
  storage,
  limits: 1e6,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      return cb(null, true);
    }
    cb(null, false);
  },
});

module.exports = {
  singleUpload: (fieldname) => diskUpload.single(fieldname),
  multiUpload: (fieldname, maxCount = 1) =>
    diskUpload.array(fieldname, maxCount),
  multiFieldUpload: (fieldList) => diskUpload.fields(fieldList),
};
