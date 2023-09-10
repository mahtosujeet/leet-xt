let browser = chrome || browser;

browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "clearFriends") {
        browser.storage.local.get('myfriends', function (data) {
            let friends_count = data.myfriends.length;
            if (friends_count > 0) {
                let friends_count = data.myfriends.length;
                browser.storage.local.set({ 'myfriends': [] }, function () {
                    sendResponse({ success: true, message: friends_count + ' Friend(s) cleared successfully.' });
                });
            } else {
                sendResponse({ success: false, message: "No friends to clear." });
            }
        });
    } else if (message.action === "exportFriends") {
        browser.storage.local.get('myfriends', function (data) {
            let friends = data.myfriends;

            if (Array.isArray(friends) && friends.length > 0) {
                let friends_str = friends.join(";");
                sendResponse({ success: true, message: friends_str });
            } else {
                sendResponse({ success: false, message: "No friends to export." });
            }
        });
    } else if (message.action === "importFriends") {
        try {
            let friends = atob(message.friends).split(";");
            let regex = /^[a-zA-Z0-9;]+$/;
            if (!regex.test(friends.join(""))) {
                sendResponse({ success: false, message: friends.join(" ")+ "Invalid users." });
                return;
            }
            browser.storage.local.set({ 'myfriends': friends }, function () {
                sendResponse({ success: true, message: friends.length + ' Friend(s) imported successfully.' });
            });
        } catch (e) {
            sendResponse({ success: false, message: "Invalid file." });
            return;
        }
    }

    return true;
});
