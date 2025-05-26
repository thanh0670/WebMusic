// controllers/albumController.js
const Album = require("../models/albumModel");
const Song = require("../models/songModel");
const asyncHandler = require("express-async-handler");

const createAlbum = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const userId = req.user.id;

  if (!name) {
    return res.status(400).json({ error: "Tên album không được để trống." });
  }

  const newAlbum = new Album({
    name,
    createdBy: userId,
    songs: [], // khởi tạo rỗng
  });

  const saved = await newAlbum.save();
  res.status(201).json({ success: true, data: saved });
});

const addSongToAlbum = asyncHandler(async (req, res) => {
  const { albumId, songId } = req.body;

  const album = await Album.findById(albumId);
  if (!album) return res.status(404).json({ error: "Album không tồn tại." });

  const song = await Song.findById(songId);
  if (!song) return res.status(404).json({ error: "Bài hát không tồn tại." });

  // Tránh thêm trùng bài hát
  if (album.songs.includes(songId))
    return res.status(400).json({ error: "Bài hát đã có trong album." });

  album.songs.push(songId);
  await album.save();

  res
    .status(200)
    .json({ message: "Đã thêm bài hát vào album.", album, success: true });
});

const getAlbumDetail = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const album = await Album.findById(id)
    .populate({
      path: "songs",
      select: "title artist url_audio url_img releaseDate views likes",
    })
    .populate({
      path: "createdBy",
      select: "username",
    });

  if (!album) {
    return res.status(404).json({ error: "Album không tồn tại." });
  }

  res.status(200).json(album);
});

const getAlbumsByUser = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const albums = await Album.find({ createdBy: userId })
    .select("name songs createdAt") // chỉ lấy các trường cần
    .populate({
      path: "songs",
      select: "url_img", // lấy ảnh đại diện nếu cần
    });
  if (!albums) {
    res.status(404).json({
      message: "Not Found",
      success: false,
    });
  }
  res.status(200).json({
    success: true,

    albums: albums,
  });
});

module.exports = {
  getAlbumDetail,
  createAlbum,
  addSongToAlbum,
  getAlbumsByUser,
};
