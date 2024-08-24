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
(()=>{"use strict";{let a,t,o;const l=chrome||browser,c=["roboto","poppins","caprasimo","playfair","merriweather","noto_sans","nunito","montserrat","pixelify","gabarito","roboto_condensed","inter"],d=["light_green","light_pink","light_pink_dd","kimbie_dark","red","solarized_dark","quiet_light","dottie","purple_dark","dark_pink","light_purple","dark_red","dark_yellow","dark_blue","amoled","amoled_night"];function s(e,a,s){fetch(l.runtime.getURL(e)).then(e=>e.text()).then(e=>{var t=document.getElementById(s),o=document.createElement("style");o.textContent=e,o.setAttribute("id",s),a&&!t?document.head.appendChild(o):!a&&t instanceof Node&&document.head.removeChild(t)}).catch(e=>{})}function n(e,o,t){s(e,o,"now_play_disable"),o?a=setInterval(function(){t.forEach(e=>{var t=localStorage.getItem(e);o&&0!=t&&localStorage.setItem(e,0)})},700):clearInterval(a)}function r(e,o){s(e,o,"static_aside"),o?t=setInterval(function(){var e,t;o&&(e=localStorage.getItem("182yfcl2wcrumva06hlhooydu:ylx-default-state-nav-bar-width"),t=localStorage.getItem("182yfcl2wcrumva06hlhooydu:ylx-sidebar-state"),400!==e&&localStorage.setItem("182yfcl2wcrumva06hlhooydu:ylx-default-state-nav-bar-width",400),1==t)&&(localStorage.setItem("182yfcl2wcrumva06hlhooydu:ylx-sidebar-state",0),window.location.reload())},700):clearInterval(t)}function i(e,t){s(e,t,"focus_mode"),t?o=setInterval(function(){t&&(1==localStorage.getItem("182yfcl2wcrumva06hlhooydu:ylx-sidebar-state")&&localStorage.setItem("182yfcl2wcrumva06hlhooydu:ylx-sidebar-state",0),localStorage.setItem("182yfcl2wcrumva06hlhooydu:items-view",0))},200):clearInterval(o)}function e(){l.storage.local.get("formState",e=>{var t,o,e=e.formState.disabled?{disabled:!0}:e.formState;s("/assets/graphs/header_btns.css",e.header_btns,"header_btns"),s("/assets/graphs/rect_avatars.css",e.rect_avatars,"rect_avatars"),s("/assets/graphs/block_images.css",e.block_images,"block_images"),s("/assets/graphs/block_videos.css",e.block_videos,"block_videos"),s("/assets/graphs/bigger_navbar.css",e.bigger_navbar,"bigger_navbar"),s("/assets/graphs/heart_icons.css",e.heart_icons,"heart_icons"),n("/assets/graphs/now_play_disable.css",e.now_play_disable,["182yfcl2wcrumva06hlhooydu:ui-panel-state","182yfcl2wcrumva06hlhooydu:ylx-sidebar-state"]),r("/assets/graphs/static_aside.css",e.static_aside),i("/assets/graphs/focus_mode.css",e.focus_mode),s("/assets/graphs/square_shaped.css",e.square_shaped,"square_shaped"),s("/assets/graphs/reduce_lowend.css",e.reduce_lowend,"reduce_lowend"),t=e.theme,-1!==d.indexOf(t)&&s(`/assets/graphs/themes/${t}.css`,!0,t),d.filter(e=>e!==t).forEach(e=>document.getElementById(e)?.remove()),o=e.font,-1!==c.indexOf(o)&&s(`/assets/graphs/fonts/${o}.css`,!0,o),c.filter(e=>e!==o).forEach(e=>document.getElementById(e)?.remove())})}l.storage.onChanged.addListener(function(){e()}),document.addEventListener("DOMContentLoaded",e,!1)}})(),(()=>{"use strict";{const s=chrome||browser,n={chrome:"https://chromewebstore.google.com/detail/ijkboaojikgaanlgigobkmbpnjgjljnc/reviews/write",firefox:"https://addons.mozilla.org/en-US/firefox/addon/SpoPlus/reviews/",edge:"https://chromewebstore.google.com/detail/ijkboaojikgaanlgigobkmbpnjgjljnc/reviews/write",opera:"https://chromewebstore.google.com/detail/ijkboaojikgaanlgigobkmbpnjgjljnc/reviews/write"};document.addEventListener("DOMContentLoaded",()=>{const a=(e=navigator.userAgent).includes("Edg")?"edge":e.includes("OPR")?"opera":!e.includes("Chrome")&&e.includes("Firefox")?"firefox":"chrome";var e;a&&n[a]&&s.storage.local.get("closeCount",function(t){if(t.closeCount||s.storage.local.set({closeCount:0}),!t.closeCount||t.closeCount<5){const o=document.createElement("div");o.setAttribute("id","ext_show");var e=s.runtime.getURL("assets/img/logo.svg");o.innerHTML=`
            <div><div class="groupl">${e?`<img src = "${e}" alt = "logo" /> `:""}
            <h1>It would really help.</h1></div><p>If you enjoy using this extension,
            would you mind rate it on the webstore,
            then?</p><a href="${n[a]}" target="_blank" id="rateLink" data-action="RATE">Rate it</a><div class="cls"><span id="closeNotification" data-action="CLOSE" style="cursor: pointer;">No,
            Thanks</span></div></div><style id="43ggfdbt5rf">#ext_show img,
            #ext_show p {
              user-select: none;
              pointer-events: none;
            }
      
            #ext_show h1 {
              display: block;
              text-align: left;
              color: #ffffff !important;
              font-weight: 600;
              font-size: 21px;
              line-height: 21px;
              margin: 0;
            }
      
            #ext_show .groupl {
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 10px 0 10px -5px;
            }
      
            #ext_show h1.first {
              margin-bottom: 5px;
            }
      
            #ext_show p {
              max-width: 290px;
              font-size: 14px;
              font-size: 12.8px;
              font-weight: 400;
              margin: 8px 0 16px;
              color: #868b90 !important;
              line-height: 140%;
              text-align: center;
            }
      
            #ext_show a {
              text-decoration: none !important;
              display: block;
              border: 1px solid rgb(68, 86, 91, 0.5);
              border-radius: 22px;
              padding: 7px 10px;
              margin: 10px auto;
              max-width: 270px;
              background-color: rgba(255, 255, 255, 0.16) !important;
              color: white !important;
              text-align: center;
              font-size: 14px;
              font-size: 14.5px;
            }
      
            #ext_show a:hover {
              text-decoration: none;
              background-color: rgba(255, 255, 255, 0.1) !important;
            }
      
            #ext_show a:focus {
              text-decoration: none;
            }
      
            #ext_show>div {
              transform: scale(1);
              box-shadow: rgba(0, 0, 0, 0.8) 0px 8px 24px;
              z-index: 100000 !important;
              font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
              width: 296px;
              position: fixed;
              top: 10px;
              right: 10px;
              background-color: #161515 !important;
              background-color: rgb(22, 21, 21, 0.96) !important;
              padding: 5px 12px 8px;
              box-sizing: border-box;
              border: 1px solid rgb(68, 86, 91, 0.5);
              z-index: 100;
              border-radius: 12px
            }
      
            #ext_show img {
              margin-right: 10px;
              height: 33px;
              width: auto;
              max-width: 40px;
            }
      
            #ext_show .cls {
              display: flex;
              justify-content: center;
            }
      
            #closeNotification {
              display: inline-block;
              margin: 0 auto;
              padding-left: 4px;
              text-align: center;
              font-size: 11px;
              font-size: 10.5px;
              color: #72767a !important;
            }
      
            #closeNotification:hover {
              text-decoration: underline;
            }
      
            </style>
              `;setTimeout(()=>{document.body.appendChild(o);var e=document.getElementById("closeNotification"),e=(e&&e.addEventListener("click",function(){s.storage.local.set({closeCount:t.closeCount+1}),o.style.display="none"}),document.getElementById("rateLink"));e&&e.addEventListener("click",function(){s.storage.local.set({closeCount:6}),o.style.display="none"})},6e5)}})},!1)}})();