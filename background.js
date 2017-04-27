chrome.browserAction.onClicked.addListener(({ id }) => {
  chrome.tabs.executeScript(id, { file: 'main.js' });
});
