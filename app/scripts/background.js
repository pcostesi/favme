'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Action');
//# sourceMappingURL=background.js.map
//

chrome.pageAction.onClicked.addListener(function(tab) {
  console.log('asd');
  chrome.tabs.sendMessage(tab.id, {hey: 'kinda works'});
});
