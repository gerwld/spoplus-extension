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
(()=>{"use strict";document.addEventListener("DOMContentLoaded",()=>{const c=document.getElementById("l3_settings"),r=document.getElementById("header_nav"),o=c.querySelectorAll(".ch_group");c.addEventListener("click",e=>{let t=e.target;t.classList.contains("toggle_ch")&&o.forEach(e=>{e.contains(t)&&(e.classList.toggle("opened"),e.querySelector(".items").setAttribute("aria-hidden",!e.classList.contains("opened")))})});let a;chrome.storage.local.onChanged.addListener((e,t)=>{e.formState&&e.formState.newValue&&JSON.stringify({...e.formState.newValue})!==a&&(a=JSON.stringify({...e.formState.newValue}),n())});const e=new CustomEvent("formStateChange");function d(){window.dispatchEvent(e)}function n(){console.log("re-render popup"),chrome.storage.local.get("formState",e=>{let o=e.formState||{};function t(e){var e=e.target,t="checkbox"===e.type?e.checked:e.value;o[e.name]=t,chrome.storage.local.set({formState:o},()=>{d()})}e.formState||chrome.storage.local.set({formState:o},()=>{d()}),c.querySelectorAll("input, select").forEach(e=>{"checkbox"===e.type?e.addEventListener("change",t):e.addEventListener("input",t)}),r.addEventListener("click",function(e){(e=e.target.getAttribute("data-action"))&&(o[e]=!o[e]),chrome.storage.local.set({formState:o},()=>{d()})});var a=document.querySelectorAll("input, select");for(let e=0;e<a.length;e++){var n=a[e];"checkbox"===n.type?n.checked=o[n.name]||!1:n.value=o[n.name]||""}o.dark_mode?document.documentElement.classList.add("dark_mode"):document.documentElement.classList.remove("dark_mode"),o.disabled?document.body.classList.add("disabled"):document.body.classList.remove("disabled")})}n()})})();