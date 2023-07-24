import React from "react";
import { songs } from "../model";
import { SongContext } from "../../context/SongContext";
import { SongList } from "../SongList";
import { ControlBar } from "../ControlBar";
import "./App.css";

export const App = (): React.ReactElement => {
  return (
    <div className="App">
      <SongContext>
        <SongList songList={songs} />
        <ControlBar />
      </SongContext>
    </div>
  );
};
