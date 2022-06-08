async function getCurrentTab() {
	let queryOptions = { active: true, lastFocusedWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

const filter = {
	url: [
		{
			urlMatches: 'https://www.qwant.com/',
		},
	],
};


chrome.webNavigation.onCompleted.addListener(() => {
	getCurrentTab()
		.then(response => chrome.scripting.executeScript({
			target: { tabId: response.id },
			files: ['contentscript.js']
		}));
}, filter);