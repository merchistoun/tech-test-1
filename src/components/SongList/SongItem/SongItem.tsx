import React from "react";
import "./songItem.css";
import { useSongContext } from "../../../context/useSongContext";
import { Song } from "../../model";

interface Props {
  song: Song;
  isActive: boolean;
}

export const SongItem = (props: Props): React.ReactElement => {
  const {
    song,
    song: { artist, title },
    isActive,
  } = props;
  const { setSelectedSong } = useSongContext();

  const onSetSelectedSong = () => {
    setSelectedSong(song);
  };

  return (
    <div
      className="songItem"
      onClick={onSetSelectedSong}
      role="button"
      style={{ cursor: "pointer" }}
    >
      <h1 className={isActive ? "songItem_artist active" : "songItem_artist"}>
        {artist}
      </h1>
      <h2 className={isActive ? "songItem_title active" : "songItem_title"}>
        {title}
      </h2>
    </div>
  );
};
