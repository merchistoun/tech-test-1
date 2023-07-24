import React from "react";
import "./songItem.css";

interface Props {
  title: string;
  artist: string;
  isActive: boolean;
}

export const SongItem = (props: Props): React.ReactElement => {
  const { artist, title, isActive } = props;

  return (
    <div className="songItem">
      <h1 className={isActive ? "songItem_artist active" : "songItem_artist"}>
        {artist}
      </h1>
      <h2 className={isActive ? "songItem_title active" : "songItem_title"}>
        {title}
      </h2>
    </div>
  );
};
