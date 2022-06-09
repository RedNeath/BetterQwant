////////////////////////////////////////////
// VARIABLES DECLARATION
////////////////////////////////////////////

// CONSTANTS :
const sPattern = "https:\/\/www\.qwant\.com\/(?!maps).*";

// OTHERS :
let bMatchesPattern;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === "complete") {
		bMatchesPattern = tab.url.match(sPattern)[0] !== "";

		if (bMatchesPattern) {
			
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ['contentscript.js']
			});
		}
	}
});