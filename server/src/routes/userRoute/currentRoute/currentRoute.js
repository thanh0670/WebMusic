const express = require("express");
const { current, dataSongs } = require("../../../controllers/userController");
const {
  validateAccessToken,
} = require("../../../middlewares/validateAccessToken");
const { auth } = require("../../../middlewares/auth");
const {
  toggleLike,
  incrementView,
  getSongStats,
} = require("../../../controllers/commetController");
const {
  getAlbumsByUser,
  createAlbum,
  getAlbumDetail,
  addSongToAlbum,
} = require("../../../controllers/albumController");
const router = express.Router();
// private

router.route("/current").get(validateAccessToken, current);
router.patch("/view/:id", incrementView);
router.get("/stats/:id", getSongStats);
router.patch("/like/:id", validateAccessToken, auth(["user"]), toggleLike);
router.route("/getData").get(dataSongs);

router.route("/getAlbumsByUser").get(validateAccessToken, getAlbumsByUser);
router.route("/createAlbum").post(validateAccessToken, createAlbum);
module.exports = router;
