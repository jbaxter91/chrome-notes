chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const currentUrl = tabs[0].url;
    const currentUrlElement = document.getElementById('current-url');
    currentUrlElement.textContent = currentUrl;
  
    const form = document.getElementById('add-url-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      const urlInput = document.getElementById('current-url');
      const contentInput = document.getElementById('content-input');
      const url = urlInput;
      const content = contentInput.value;
      chrome.storage.local.set({ [url]: content }, () => {
        console.log(`Saved ${url}: ${content}`);
        urlInput.value = '';
        contentInput.value = '';
      });
    });
  });
  