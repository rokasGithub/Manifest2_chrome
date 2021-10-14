let active_tab_id = 0;

chrome.tabs.onActivated.addListener(tab => {

    chrome.tabs.get(tab.tabId, current_tab_info => {
        active_tab_id = tab.tabId;
        if(/^https:\/\/www\.google/.test(current_tab_info.url)){
            // Injecting script into the page
            chrome.tabs.executeScript(null, {file: "./forground.js"}, 
            () => {console.log("I injected the foreground scripts")})

            // Injecting css into the page
            chrome.tabs.insertCSS(null, {file: './styles.css'})
        }
    })
})



// listens for a message from the foreground script can be triggered by the user clicking
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.message === 'yo now check the storage'){
        // We need the actual tab id for the message to be sent back to the foreground unlike execute script which can default to null for current tab id
        chrome.tabs.sendMessage(active_tab_id, {message: 'yo i know, heres your response : '})
        
        // sendResponse({message : "yo i got your message"})
        chrome.storage.local.get("password", value => {
            console.log(value)
        })
    }
})

// chromes.tab.onUpdate -> listen to check if the page has been refreshed
// chromes.tab.onactivated -> only when tabbed is clicked

// Background js monitors what the user is doing, then injects the script into the page, just contains listeners that monitors user activity
// correct tab