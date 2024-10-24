const token = "BQB89x0LCs9vCA7xsRa5FWjx0dHm3OPPIYVp_hnMGszBrXG3wc6K4tcA8ZcPsdxhCzJpW5RAA-eQ-4VkDWkU9_j3UDjH-BFH-HIs7dLYaxKpfauWBydAbwZvydmf0x3xtlYTcle0pTfpTKjVb4PghrteyrChzUpRWkIq9IB3JTKovoG6N8QlrAjWzeZEHr0&token_type=Bearer&expires_in=3600"

async function search() {
    const { data } = await axios.get("https://api.spotify.com/v1/browse/categories", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            country: "IN",
            locale: "en_IN",
            limit: 50
        }
    });

    return data.categories.items || [];  
}

document.addEventListener('DOMContentLoaded', async function (e) {
    const data = await search();
    const resultList = document.getElementById(`result-list`)

    data.map((category) => {
        let element = document.createElement("img");
        element.src = category.icons[0].url
        element.classList.add("border", "p-2")
        resultList.appendChild(element);
    })
})


const spotifyTitle = document.getElementById("spotify-title");


spotifyTitle.addEventListener("mouseover", function () {
    spotifyTitle.style.color = "green";
});

spotifyTitle.addEventListener("mouseout", function () {
    spotifyTitle.style.color = "white";
});



