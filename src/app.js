const APIKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCTlQ2ejhsMlBRc1BOQVF5a2VuTFRmS29Qa2hIaDlJNWd2SUJiblF6eWhRZFowQUNnVSIsImp0aSI6IjRiYWJhZmYyODUwNGY2YTgxNDE1NTk3ZDJiYjc5ZmM3ZTkzZjE5OTExOTIyYzU5ZTZhNzQ4MWFiMmQ5MDc2NTQ3NDEwMWE5M2VmOWFhNDk2IiwiaWF0IjoxNjc3NDMwNjQ0LCJuYmYiOjE2Nzc0MzA2NDQsImV4cCI6MTY3NzQzNDI0NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.jckwXV0MOOBRiXuXs5ecnF7sP2xmLzDCWlwncnwr8Hp0_eLxmNSxhD4MsQMPYm0zlQvOmWFJPJUMMbctmT80elXAMXxdY_fstmV451UHMVF0Hxg6YwlASpUR5gL2WhfsKqFdMoO5q0m6KtEreKGLIuiafTkhEu7w3aYcLHhG6mVXhl6edfx5IttqY9iueLpu9E6j4NG_DK8no_EV9a7_-senIyYb4OJ-w7xBGmRDqbZSEK1Xxbyaw-2BWSkA2N3kRrgGQOIopLcW9OfmYn0I1MmQeLEX4hOyK2xKW1PI6Nz_FeOfX2K-IToufZSNGbfT5EaZSN5ZPwWzcFF0aEfk8w"
let URL = `https://api.petfinder.com/v2/animals?type=cat&status=adoptable&limit=50`
const searchURL = 'https://api.petfinder.com/v2/animals?type=cat&status=adoptable&limit=50&location='


const form = document.getElementById("form")
const search = document.getElementById("query")
const main = document.getElementById("cat-container")


function fetchCats(url) {
    console.log(url)
    fetch(url, {
        headers: {
            Authorization: `Bearer ${APIKey}`,
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // Process the data and display the cat information in the cat container
        const catContainer = document.getElementById('cat-container');
        // Loop through the cat data and display each cat's information
        data.animals.forEach(cat => {
            const catCard = `
                <div class="card">
                    <div class="image-container">
                        <img src="${cat.photos[0] === undefined ? "../build/img/cat-image.jpg" : cat.photos[0].medium}" alt="${cat.name}" alt="${cat.name}">
                    </div>
                    <div class="details">
                        <h2>${cat.name}</h2>
                        <p>${cat.description === null ? `${cat.name} has no story to tell as of yet, maybe you can help create one for this cutie` : cat.description}</p>
                        <a href="../build/cat.html?id=${cat.id}">Details</a>
                    </div>
                </div>
                `;
            catContainer.insertAdjacentHTML('beforeend', catCard);
        });
    })
    .catch(error => {
        console.error('Error fetching cats:', error);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    main.innerHTML = ''
    const searchItem = search.value
    
    if(searchItem) {
        fetchCats(searchURL+encodeURIComponent(searchItem))
        search.value = ''
    }
})

fetchCats(URL)