const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'uploads'),
  storage: multer.diskStorage({
    destination:(request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename:(request, file, callback) => {
      crypto.randomBytes(8, (err, hash) => {
        if (err) return callback(err);

        return callback(null, hash.toString('hex') + path.extname(file.originalname));
    });
    },
  }),
  limits: {
    fileSize: 3 * 1024 * 1024
  },
  fileFilter: (request, file, callback) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjeg',
      'image/png',
    ];

    if(allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Tipo de arquivo inválido!"));
    }
  },
};