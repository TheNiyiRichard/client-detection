'use strict'

// Function to get the operating system name
function getOS() {
    let osInfo = window.navigator.platform;
    return osInfo;
}

// Function to get the system language
function getLanguage() {
    let languageInfo = window.navigator.language;
    return languageInfo;
}

// Function to get the browser name
function getBrowser() {
    let browserInfo = window.navigator.userAgent;
    if (browserInfo.includes("Chrome")) {
        return "Chrome";
    } else if (browserInfo.includes("Firefox")) {
        return "Firefox";
    } else if (browserInfo.includes("Edge")) {
        return "Edge";
    } else {
        return "Unknown";
    }
}

// Function to get window dimensions and orientation
function getWindowInfo() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width > height ? "Landscape" : "Portrait";
    let res = {
        width,height,orientation
    }
    return res;
}

// Function to get battery information (if available)
function getBatteryInfo() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            const level = (battery.level * 100).toFixed(2);
            const status = battery.charging ? "Charging" : "Idle";
            document.getElementById("battery-level").textContent = `${level}%`;
            document.getElementById("battery-status").textContent = `${status}`;
        });
    } else {
        document.getElementById("battery-level").textContent = "Not Available";
        document.getElementById("battery-status").textContent = "Not Available";
    }
}

// Function to update network status dynamically
function updateNetworkStatus() {
    let networkStatus = document.getElementById("network-status");
    if (navigator.onLine) {
        networkStatus.textContent = "Online";
        networkStatus.style.backgroundColor = "green";
    } else {
        networkStatus.textContent = "Offline";
        networkStatus.style.backgroundColor = "red";
    }
}

// Event listener for window resize
window.addEventListener("resize", function() {
    document.getElementById("window-width").textContent = getWindowInfo().width;
    document.getElementById("window-height").textContent = getWindowInfo().height;
    document.getElementById("orientation-info").textContent = getWindowInfo().orientation;
});

// Event listener for online/offline status change
window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);

// Initialize the page with system information
document.getElementById("os-info").textContent = getOS();
document.getElementById("language-info").textContent = getLanguage();
document.getElementById("browser-info").textContent = getBrowser();
document.getElementById("window-width").textContent = getWindowInfo().width;
document.getElementById("window-height").textContent = getWindowInfo().height;
document.getElementById("orientation-info").textContent = getWindowInfo().orientation;
getBatteryInfo();
updateNetworkStatus(); 

console.log(navigator.userAgent)
