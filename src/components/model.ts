export type Song = {
  id: string;
  artist: string;
  title: string;
};

export const songs: Song[] = [
  { id: "a6ec81", artist: "Sia", title: "Chandelier" },
  { id: "c73d4f", artist: "Lady Gaga", title: "Bad Romance" },
  { id: "b34e5a", artist: "Bon Jovi", title: "Livin' On A Prayer" },
  { id: "5cd4fe", artist: "Jon and Vangelis", title: "I'll Find My Way Home" },
  { id: "d4f5a6", artist: "Phil Oakey", title: "Together In Electric Dreams" },
];

export enum RepeatType {
  None = "Do not repeat",
  All = "Repeat all songs",
  One = "Repeat track",
}
