chrome.action.onClicked.addListener((tab) => {
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    })
    .then((injectionResults) => {
      // Check if the overlay was created or removed
      const result = injectionResults[0].result;
      const iconPath = result
        ? {
            16: "icons/eye-closed-16.png",
            48: "icons/eye-closed-48.png",
            128: "icons/eye-closed-128.png",
          }
        : {
            16: "icons/eye-16.png",
            48: "icons/eye-48.png",
            128: "icons/eye-128.png",
          };

      // Change the extension icon
      chrome.action.setIcon({
        tabId: tab.id,
        path: iconPath,
      });
    });
});
