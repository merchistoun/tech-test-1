import { useContext, useCallback } from "react";
import { Context } from "./SongContext";
import { RepeatType, Song } from "../components/model";

interface UseSongContext {
  selectedSong?: Song;
  selectedRepeatType: RepeatType;
  setSelectedSong: (song: Song) => void;
  onToggleRepeat: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const useSongContext = (): UseSongContext => {
  const {
    isInitialized,
    songs,
    repeatTypes,
    selectedSong,
    setSelectedSong,
    selectedRepeatType,
    setSelectedRepeatType,
  } = useContext(Context);

  if (!isInitialized) {
    throw new Error("Component must be mounted within a SongContext");
  }

  const onToggleRepeat = useCallback((): void => {
    const next =
      repeatTypes.findIndex((repeatType) => repeatType === selectedRepeatType) +
      1;
    setSelectedRepeatType(repeatTypes[next % repeatTypes.length]);
  }, [repeatTypes, selectedRepeatType, setSelectedRepeatType]);

  const onNext = useCallback((): void => {
    if (!selectedSong) return;
    const index = songs.findIndex((song) => song === selectedSong);
    const isLast = index === songs.length - 1;

    switch (selectedRepeatType) {
      case RepeatType.None:
        setSelectedSong(isLast ? undefined : songs[index + 1]);
        break;

      case RepeatType.All:
        setSelectedSong(isLast ? songs[0] : songs[index + 1]);
        break;

      case RepeatType.One:
        break;
    }
  }, [songs, selectedSong, selectedRepeatType, setSelectedSong]);

  const onPrevious = useCallback((): void => {
    if (!selectedSong) return;
    const index = songs.findIndex((song) => song === selectedSong);
    const isFirst = index === 0;

    switch (selectedRepeatType) {
      case RepeatType.None:
        setSelectedSong(isFirst ? undefined : songs[index - 1]);
        break;

      case RepeatType.All:
        setSelectedSong(isFirst ? songs[songs.length - 1] : songs[index - 1]);
        break;

      case RepeatType.One:
        break;
    }
  }, [songs, selectedSong, selectedRepeatType, setSelectedSong]);

  return {
    selectedSong,
    selectedRepeatType,
    setSelectedSong,
    onToggleRepeat,
    onNext,
    onPrevious,
  };
};
