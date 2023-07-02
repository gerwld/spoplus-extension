// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("l3_settings");

  chrome.storage.local.set({ key: "red" }, function () {
    console.log("Value saved in local storage");
  });

  // Initial state object
  const initialState = {
    checkbox3: false,
  };

  // Retrieve state from extension storage or use the initial state
  chrome.storage.local.get("formState", (result) => {
    let state = result.formState || { ...initialState };

    // Function to update the state object and form inputs
    function updateState(event) {
      const input = event.target;
      const value = input.type === "checkbox" ? input.checked : input.value;
      state[input.name] = value;

      // Save the updated state to extension storage
      chrome.storage.local.set({ formState: state });

      console.log(state);
    }

    // Function to update form inputs based on the state object
    function updateFormInputs() {
      const inputs = document.getElementsByTagName("input");
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if (input.type === "checkbox") {
          input.checked = state[input.name] || false;
        } else {
          input.value = state[input.name] || "";
        }
      }
    }

    // Add event listener to each input and update the state
    const inputs = container.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("input", updateState);
      if (input.type === "checkbox") {
        input.removeEventListener("input", updateState);
        input.addEventListener("change", updateState);
      }
    });

    // Initialize the form inputs based on the state
    updateFormInputs();
  });
});
