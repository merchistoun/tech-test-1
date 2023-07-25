import React, { createContext } from "react";
import { RepeatType, Song, songs } from "../components/model";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

interface ContextType {
  isInitialized: boolean;

  songs: Song[];
  selectedSong?: Song;
  setSelectedSong: (song?: Song) => void;

  repeatTypes: RepeatType[];
  selectedRepeatType: RepeatType;
  setSelectedRepeatType: (repeatType: RepeatType) => void;
}

export const Context = createContext<ContextType>({
  isInitialized: false,
  songs: [],
  setSelectedSong: () => {},
  repeatTypes: [],
  selectedRepeatType: RepeatType.None,
  setSelectedRepeatType: () => {},
});

export const SongContext = (props: Props): React.ReactElement => {
  const { children } = props;
  const [selectedSong, setSelectedSong] = React.useState<Song>();
  const [selectedRepeatType, setSelectedRepeatType] =
    React.useState<RepeatType>(RepeatType.None);

  return (
    <Context.Provider
      value={{
        isInitialized: true,
        songs,
        selectedSong,
        setSelectedSong,
        repeatTypes: [RepeatType.None, RepeatType.All, RepeatType.One],
        selectedRepeatType,
        setSelectedRepeatType,
      }}
    >
      {children};
    </Context.Provider>
  );
};
