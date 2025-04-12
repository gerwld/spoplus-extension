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
document.addEventListener("DOMContentLoaded",()=>{let c=document.getElementById("l3_settings"),r=document.getElementById("header_nav"),l=document.getElementById("lang_set"),a=c.querySelectorAll(".ch_group");c.addEventListener("click",e=>{let t=e.target;t.classList.contains("toggle_ch")&&a.forEach(e=>{e.contains(t)&&(e.classList.toggle("opened"),e.querySelector(".items").setAttribute("aria-hidden",!e.classList.contains("opened")))})});let o,e=(chrome.storage.local.onChanged.addListener((e,t)=>{e.formState&&e.formState.newValue&&JSON.stringify({...e.formState.newValue})!==o&&(o=JSON.stringify({...e.formState.newValue}),n())}),new CustomEvent("formStateChange"));function d(){window.dispatchEvent(e)}function n(){console.log("re-render popup"),chrome.storage.local.get("formState",e=>{let a=e.formState||{};function t(e){var e=e.target,t="checkbox"===e.type?e.checked:e.value;a[e.name]=t,chrome.storage.local.set({formState:a},()=>{d()})}e.formState||chrome.storage.local.set({formState:a},()=>{d()}),c.querySelectorAll("input, select").forEach(e=>{"checkbox"===e.type?e.addEventListener("change",t):e.addEventListener("input",t)}),r.addEventListener("click",function(e){(e=e.target.getAttribute("data-action"))&&(a[e]=!a[e]),chrome.storage.local.set({formState:a},()=>{d()})}),l.addEventListener("change",function(e){a.lang_set=e.target.value||"en",console.log(e.target.value),chrome.storage.local.set({formState:a},()=>{d()})});var o=document.querySelectorAll("input, select");for(let e=0;e<o.length;e++){var n=o[e];"checkbox"===n.type?n.checked=a[n.name]||!1:n.value=a[n.name]||""}a.dark_mode?document.documentElement.classList.add("dark_mode"):document.documentElement.classList.remove("dark_mode"),a.disabled?document.body.classList.add("disabled"):document.body.classList.remove("disabled")})}n()});