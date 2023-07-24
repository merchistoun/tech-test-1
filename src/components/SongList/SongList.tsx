import React from "react";
import { Song } from "../model";
import { SongItem } from "./SongItem";

interface Props {
  songList: Song[];
}

export const SongList = (props: Props): React.ReactElement => {
  const { songList } = props;

  return (
    <div className="container">
      {songList.map((song) => (
        <SongItem
          key={song.id}
          artist={song.artist}
          title={song.title}
          isActive={false}
        />
      ))}
    </div>
  );
};
