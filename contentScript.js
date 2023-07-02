var body = document.querySelector("body");
body.style.backgroundColor = "#eee";

function getCurrentState() {
  chrome.storage.local.get("formState", (result) => {
    console.log(result.formState);
    return result.formState;
  });
}

function handleFormStateChangeEvent() {
  getCurrentState();
}

//Init get state
getCurrentState();

// Add event listener to the state change
chrome.storage.onChanged.addListener(handleFormStateChangeEvent);
