//   - This file is part of SpoPlus Extension
//  <https://github.com/gerwld/SpoPlus-extension/blob/main/README.md>,
//   - Copyright (C) 2023-present SpoPlus Extension
//   -
//   - SpoPlus Extension is a software: you can redistribute it, but you are not allowed to modify it under the terms of the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License.
//   -
//   - SpoPlus Extension is distributed in the hope that it will be useful,
//   - but WITHOUT ANY WARRANTY; without even the implied warranty of
//   - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   - Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License for more details.
//   -
//   - You should have received a copy of the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License
//   - along with SpoPlus Extension.  If not, see <https://creativecommons.org/licenses/by-nc-nd/4.0/>.


// Note: Spotify is a registered trademark of Spotify AB. This extension is not affiliated with or endorsed by Spotify AB.
const initialState={disabled:!1,dark_mode:!0,focus_mode:!0,bigger_navbar:!0,header_btns:!1,static_aside:!0,block_images:!1,block_videos:!1,rect_avatars:!1,square_shaped:!1,now_play_disable:!1,theme:"purple_dark",font:"inter"},browser_cr=chrome||browser;function initStateIfNotExist(){browser_cr.storage.local.get("formState",e=>{e.formState&&0!==Object.keys(e.formState).length||browser_cr.storage.local.set({formState:{...initialState}})})}initStateIfNotExist(),chrome=chrome||browser,browser_cr.runtime.onInstalled.addListener(function(t){"install"!==t.reason&&"update"!==t.reason||chrome.storage.local.get("welcomePageDisplayed",function(e){e.welcomePageDisplayed||"install"!==t.reason?"update"===t.reason&&chrome.tabs.create({url:"https://chesscolibri.pro/sp/update"}):(chrome.tabs.create({url:"https://chesscolibri.pro/sp/welcome"}),chrome.storage.local.set({welcomePageDisplayed:!0}))})}),browser_cr.runtime.setUninstallURL("https://docs.google.com/forms/d/e/1FAIpQLScGXGlaC1KUSji5XzrVtB7PpRdoBbmRhoEVig1BPPrUY2ShKg/viewform?usp=sf_link");