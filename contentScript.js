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
      else if (!item) document.head.removeChild(current);
    });
}

function getCurrentState() {
  chrome.storage.local.get("formState", (result) => {
    console.log(result.formState);
    const state = result.formState;

    //styles setters
    setOrRemoveStylesOfItem("/assets/css/part1.css", state.bigger_navbar, "bigger_navbar");
  });
}

function handleFormStateChangeEvent() {
  getCurrentState();
}

//Init get state
getCurrentState();

// Add event listener to the state change
chrome.storage.onChanged.addListener(handleFormStateChangeEvent);
