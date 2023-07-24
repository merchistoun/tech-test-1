# Technical Test 1

### Duration: 70 minutes

You are being asked to write a user interface for a music player.
A list of songs is displayed, with a control bar to move to the previous / next song, and to change the repeat mode.

- A React context (`SongContext`) and a custom hook (`useSongContext`) should be developed to hold the current song, the player's repeat mode, and the functions to change tracks and repeat mode.

- The selected artist and song title should be displayed in the control bar header.

- The repeat mode button should show the current repeat mode. The repeat mode should loop through the available modes then repeat from the start.

- When the user clicks on a song, it should become selected.

- When a song is selected, it should show as 'isActive' (style already created).

- When `Next` is pressed, the next song should be selected.

  - If there is no next song and the repeat mode is `Do not repeat`, then no song should be selected
  - if there is no next song and the repeat mode is `Repeat all Songs`, then the first song in the list should be selected
  - if the repeat mode is `Repeat track` then the same song should remain selected
  - if no song is currently selected then take no action
    <br>
    <br>

- When `Previous` is pressed, the previous song should be selected.

  - If there is no previous song and the repeat mode is `Do not repeat`, then no song should be selected
  - if there is no previous song and the repeat mode is `Repeat all songs`, then the last track should be selected.
  - if the repeat mode is `Repeat track` then the same song should remain selected
  - if no song is currently selected then take no action
    <br>
    <br>

- If the custom hook is mounted from a component which is not wrapped in the Context, then and error should be thrown with the message `Component must be mounted within a SongContext`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
