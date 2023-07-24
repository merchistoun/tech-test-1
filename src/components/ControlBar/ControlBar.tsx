import React from "react";
import "./controlBar.css";
import { RepeatType } from "../model";

export const ControlBar = (): React.ReactElement => {
  const artist = "~ Current Artist ~";
  const title = "~ Current Title ~";
  const repeatMode = RepeatType.None;

  const onClickPrevious = () => {};

  const onClickNext = () => {};

  const onClickRepeatMode = () => {};

  return (
    <div className="controlBar">
      <h1 className="controlBar_artist">{artist}</h1>
      <h2 className="controlBar_title">{title}</h2>

      <div className="controlBar_buttons">
        <button className="controlBar_button" onClick={onClickPrevious}>
          Previous
        </button>
        <button className="controlBar_button" onClick={onClickNext}>
          Next
        </button>
        <button className="controlBar_button" onClick={onClickRepeatMode}>
          {repeatMode}
        </button>
      </div>
    </div>
  );
};
