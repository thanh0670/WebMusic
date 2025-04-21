const express = require("express");
const uploadFilesMiddleware = require("../../middlewares/upLoad")
const { uploadAudio: uploadController, updateAudio: updateAudioController, adminAuth } = require("../../controllers/adminController");
const router = express.Router();
const { auth } = require("../../middlewares/auth");
const { validateAccessToken } = require("../../middlewares/validateAccessToken")


router.route('/admin/getValue').get(validateAccessToken, auth(["admin"]), adminAuth);
router.route('/admin/uploadAudio').post(validateAccessToken,auth(["admin"]), uploadFilesMiddleware, uploadController);
router.route('/admin/updatedAudio/:id').put(validateAccessToken,auth(["admin"]), uploadFilesMiddleware, updateAudioController);

module.exports = router;