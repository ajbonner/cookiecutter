chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  if (changeInfo.status === 'complete') {
    chrome.tabs.get(tabId, function(tab) {
      if (tab.url.indexOf('telegraph.co.uk') !== -1) {
        chrome.cookies.remove({ url: tab.url, name: 'tmg_authz_session' });
        chrome.cookies.remove({ url: tab.url, name: 'tmg_subs_referer' });
        chrome.cookies.remove({ url: tab.url, name: 'tmg_web_trends' });
      }
    });
  }
});
