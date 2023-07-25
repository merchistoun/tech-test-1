import React from "react";
import { Song } from "../model";
import { SongItem } from "./SongItem";
import { useSongContext } from "../../context/useSongContext";

interface Props {
  songList: Song[];
}

export const SongList = (props: Props): React.ReactElement => {
  const { songList } = props;
  const { selectedSong } = useSongContext();

  return (
    <div className="container">
      {songList.map((song) => (
        <SongItem key={song.id} song={song} isActive={song === selectedSong} />
      ))}
    </div>
  );
};
