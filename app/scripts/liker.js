'use strict';

function favEverything() {
  const hearts = Array.from(document.querySelectorAll('li.fav:not(.marked)'));
  for (const heart of hearts) {
    console.log(heart);
    heart.click();
  };
}


chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
  favEverything();
  return sendResponse({});
})
