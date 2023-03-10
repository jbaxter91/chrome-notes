
  chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url) {
            const currentUrl = tab.url;
            const savedContent = localStorage.getItem(currentUrl);
            if (savedContent) {
              chrome.browserAction.setIcon({
                path: "\icon48-note.png",
                tabId: activeInfo.tabId
              });
            } else {
              chrome.browserAction.setIcon({
                path: "\icon48.png",
                tabId: activeInfo.tabId
              });
            }
          }
    });
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      // check if there is a saved note for the current URL
      const savedNote = localStorage.getItem(tab.url);
      if (savedNote) {
        // if there is a saved note, change the icon to a different image
        chrome.browserAction.setIcon({ path: "\icon48-note.png" });
      } else {
        // if there is no saved note, change the icon to the default image
        chrome.browserAction.setIcon({ path: "\icon48.png" });
      }
    }
  });