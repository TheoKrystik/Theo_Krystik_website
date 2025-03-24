const videos = [
    {
        title: "Cinematic Reel 2025",
        url: "https://your-video-url.com/reel2025",
        thumbnail: "https://your-thumbnail-url.com/reel2025.jpg",
    },
    {
        title: "Brand Storytelling",
        url: "https://your-video-url.com/brand-story",
        thumbnail: "https://your-thumbnail-url.com/brand-story.jpg",
    },
    {
        title: "Short Film: The Journey",
        url: "https://your-video-url.com/short-film",
        thumbnail: "https://your-thumbnail-url.com/short-film.jpg",
    }
];

const videoContainer = document.getElementById("video-container");

videos.forEach(video => {
    const card = document.createElement("div");
    card.classList.add("video-card");
    card.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" width="300">
        <h2>${video.title}</h2>
        <a href="${video.url}" target="_blank">Watch Now</a>
    `;
    videoContainer.appendChild(card);
});
