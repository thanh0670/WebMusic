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
  createComment,
  getCommentsBySong,
} = require("../../../controllers/commetController");
const {
  getAlbumsByUser,
  createAlbum,
  getAlbumDetail,
  addSongToAlbum,
  deleteAlbum,
  deleteSongFromAlbum,
} = require("../../../controllers/albumController");
const router = express.Router();

// private
router.route("/current").get(validateAccessToken, current);
router.patch("/view/:id", incrementView);
router.get("/stats/:id", getSongStats);
router.patch("/like/:id", validateAccessToken, auth(["user"]), toggleLike);
router.route("/getData").get(dataSongs);

// route comment
router.route("/createComment").post(validateAccessToken, createComment);
router
  .route("/getCommentsBySong/:id")
  .get(validateAccessToken, getCommentsBySong);

// route album
router.route("/getAlbumDetail/:id").get(validateAccessToken, getAlbumDetail);
router.route("/getAlbumsByUser").get(validateAccessToken, getAlbumsByUser);
router.route("/createAlbum").post(validateAccessToken, createAlbum);
router.route("/addSongToAlbum").post(validateAccessToken, addSongToAlbum);
router
  .route("/deleteSongFromAlbum")
  .delete(validateAccessToken, deleteSongFromAlbum);
router.route("/deleteAlbum/:id").delete(validateAccessToken, deleteAlbum);

module.exports = router;
