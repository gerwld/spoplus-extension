//   - This file is part of Spotify Theme editor
//  <https://github.com/gerwld/spotify-theme-editor/blob/main/README.md>,
//   - Copyright (C) 2019-present  Spotify Theme editor, Inc.
//   -
//   - Spotify Theme editor is free software: you can redistribute it and/or modify
//   - it under the terms of the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License.
//   -
//   - Spotify Theme editor is distributed in the hope that it will be useful,
//   - but WITHOUT ANY WARRANTY; without even the implied warranty of
//   - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   - Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License for more details.
//   -
//   - You should have received a copy of the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License
//   - along with Spotify Theme editor.  If not, see <https://creativecommons.org/licenses/by-nc/4.0/>.

// Initial state object
export const initialState = {
  bigger_navbar: true,
  classic_mode: true,
  premium_btns: false,
  static_aside: true,

  block_images: false,
  block_videos: false,
  rect_avatars: false,
  square_shaped: false,
  now_play_disable: false,
  theme: "default",
  font: "poppins",
};

export function initStateIfNotExist() {
  chrome.storage.local.get("formState", (result) => {
    if (!result.formState) chrome.storage.local.set({ formState: { ...initialState } });
  });
}
