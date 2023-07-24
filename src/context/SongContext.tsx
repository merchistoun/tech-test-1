import React from "react";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const SongContext = (props: Props): React.ReactElement => {
  const { children } = props;

  return <>{children};</>;
};
