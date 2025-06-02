import React from "react";

const Playlist = ({ songs }) => {
  if (!Array.isArray(songs) || songs.length === 0) {
    return <p className="text-white">Không có bài hát nào trong playlist.</p>;
  }

  return (
    <div className="text-white">
      {songs.map((song, index) => (
        <div key={index}>
          <p>{song.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
