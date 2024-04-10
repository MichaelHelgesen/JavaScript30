const input = document.querySelector(".search");
const listEl = document.querySelector(".suggestions");
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
function findMatch(wordToMatch, cities) {
    listEl.innerHTML = "";
    if (wordToMatch) {
        const regex = new RegExp(wordToMatch, "gi");
        cities.filter(data => data["city"].match(regex) || data["state"].match(regex))
            .forEach(data => {
            const city = data["city"].replace(regex, `<span class="hl">${wordToMatch}</span>`);
            const state = data["state"].replace(regex, `<span class="hl">${wordToMatch}</span>`);
            const liElement = document.createElement("li");
            const resultString = `<span class="name">${city}, ${state}</span>
                                  <span class="population">${data["population"]}</span>
                                  `;
            liElement.innerHTML = resultString;
            listEl.appendChild(liElement);
        });
    }
    else {
        listEl.innerHTML = "";
    }
}
input.addEventListener("input", (e => findMatch(e.target.value, cities)));
