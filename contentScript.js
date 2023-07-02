function setOrRemoveStylesOfItem(assetPath, item, item_id) {
  // Fetch the CSS file and append it
  fetch(chrome.runtime.getURL(assetPath))
    .then((response) => response.text())
    .then((css) => {
      let current = document.getElementById(item_id);
      let style = document.createElement("style");
      style.textContent = css;
      style.setAttribute("id", item_id);
      if (item && !current) document.head.appendChild(style);
      else if (!item && current instanceof Node) document.head.removeChild(current);
    });
}

function getCurrentState() {
  chrome.storage.local.get("formState", (result) => {
    console.log(result.formState);
    const state = result.formState;

    //styles setterss
    setOrRemoveStylesOfItem("/assets/css/classic_mode.css", state.classic_mode, "classic_mode");
    setOrRemoveStylesOfItem("/assets/css/premium_btns.css", state.premium_btns, "premium_btns");
    setOrRemoveStylesOfItem("/assets/css/static_aside.css", state.static_aside, "static_aside");
    setOrRemoveStylesOfItem("/assets/css/rect_avatars.css", state.rect_avatars, "rect_avatars");
    setOrRemoveStylesOfItem("/assets/css/block_images.css", state.block_images, "block_images");
    setOrRemoveStylesOfItem("/assets/css/block_videos.css", state.block_videos, "block_videos");
    setOrRemoveStylesOfItem("/assets/css/bigger_navbar.css", state.bigger_navbar, "bigger_navbar");
    setOrRemoveStylesOfItem("/assets/css/now_play_disable.css", state.now_play_disable, "now_play_disable");
  });
}

function handleFormStateChangeEvent() {
  getCurrentState();
}

//Init get state
getCurrentState();

// Add event listener to the state change
chrome.storage.onChanged.addListener(handleFormStateChangeEvent);
