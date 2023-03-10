
document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentUrl = tabs[0].url;
      const currentUrlElement = document.getElementById("current-url");
      currentUrlElement.textContent = currentUrl;
  
      const contentInput = document.getElementById("content-input");
      const savedContent = localStorage.getItem(currentUrl);
      if (savedContent) {
        contentInput.value = savedContent;
  
        // Set the icon to indicate that there is a saved note
        chrome.browserAction.setIcon({
            path: "\icon48-note.png"
        });
      } else {
        // Set the icon to the default icon
        chrome.browserAction.setIcon({
          path: "\icon48.png"
        });
      }
    });
  
    const form = document.getElementById("add-url-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const contentInput = document.getElementById("content-input");
      const url = document.getElementById("current-url").textContent;
      const content = contentInput.value;
      //remove empty notes
      if(!contentInput.value){
        localStorage.removeItem(url);
        // Set the icon to indicate that there is a saved note
        chrome.browserAction.setIcon({
            path: "\icon48.png"
        });
        return;
      }
      localStorage.setItem(url, content);
  
      // Set the icon to indicate that there is a saved note
      chrome.browserAction.setIcon({
        path: "\icon48-note.png"
      });
  
    
    });
  });
  