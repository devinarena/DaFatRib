// DaFatRib channel id
const channelId = "UCGpquMaulMc7dlKYEEsLYWQ";
// DaFatRib playlist id
const playlistId = "UUGpquMaulMc7dlKYEEsLYWQ";


document.addEventListener("DOMContentLoaded", () => {
    const toggleCursor = document.getElementById("toggle-cursor");
    toggleCursor.checked = false; // Default state
    toggleCursor.addEventListener("change", () =>  {
        if (toggleCursor.checked) {
            document.body.style.setProperty("--custom-cursor", "url('./images/DragonScimi.cur')");
        } else {
            document.body.style.setProperty("--custom-cursor", "auto");
        }
    });
});

const fetchChannelData = async () => {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId}&part=snippet,contentDetails,statistics`);
        const data = await response.json();
        return data.items[0].snippet;
    } catch (error) {
        console.error("Error fetching channel data:", error);
    }
}

const fetchPlaylistItems = async () => {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet,contentDetails`);
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error("Error fetching playlist items:", error);
    }
}