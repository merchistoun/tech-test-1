import React from "react";
import "./controlBar.css";
import { useSongContext } from "../../context/useSongContext";

export const ControlBar = (): React.ReactElement => {
  const {
    selectedSong,
    selectedRepeatType,
    onToggleRepeat,
    onNext,
    onPrevious,
  } = useSongContext();

  const { title, artist } = selectedSong || {
    artist: "~",
    title: "Nothing selected",
  };

  return (
    <div className="controlBar">
      <h1 className="controlBar_artist">{artist}</h1>
      <h2 className="controlBar_title">{title}</h2>

      <div className="controlBar_buttons">
        <button className="controlBar_button" onClick={onPrevious}>
          Previous
        </button>
        <button className="controlBar_button" onClick={onNext}>
          Next
        </button>
        <button className="controlBar_button" onClick={onToggleRepeat}>
          {selectedRepeatType}
        </button>
      </div>
    </div>
  );
};
