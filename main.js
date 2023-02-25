const APIKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCTlQ2ejhsMlBRc1BOQVF5a2VuTFRmS29Qa2hIaDlJNWd2SUJiblF6eWhRZFowQUNnVSIsImp0aSI6ImQ1NzFjOWI1NTc0NDQzZDU4YTBlZWZkMjI1ZGQ4MWY4NDUyNDZlZjI4MDc0Y2MzNGJlNjA3ZGQyOGM0ZjUzMDgxOTZlYTIwYWZkNzRkMDE1IiwiaWF0IjoxNjc3MzI4ODg5LCJuYmYiOjE2NzczMjg4ODksImV4cCI6MTY3NzMzMjQ4OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.nDAaYE9H6zqMDU33kJA-yjEiTDEw08fnaVhtvKaBbTPtLz9OjFouYn2z79u3KFlJZw8LUB-6yRL86UCra8fGY9DWyc9vDb4HuFJ3HD8NAzkXk3hBLzXwtKcSijkj3nFkLPbxrKsgNXX274ncgRC4VwRi49xVjWKmJHzZs6WGau5hdyoC9XGN6aJuLGorApX65NLDG0zFlqaY2BjaFB4NyHPkY4UtXqnnMCuBHk_eq5rgK1air9ou1IpwurZ7EuQ5odJ-5aGs9zcMBWGKuyRv2lYlYyJjCpGRS_Or_CiOeSB4VP7eGqX-lb7RjUeDV2pkAhhypL7vd0nUE1R6XnCLNw"
const URL = `https://api.petfinder.com/v2/animals?type=cat&status=adoptable&page=1`
const searchURL = 'https://api.petfinder.com/v2/animals?type=cat&status=adoptable'

const form = document.getElementById("form")
const search = document.getElementById("query")
const main = document.getElementById("cat-container")

function fetchCats(url) {
    console.log(url)
    fetch(url, {
        headers: {
            Authorization: `Bearer ${APIKey}`
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
                        <img src="${cat.photos[0] === undefined ? "./cat-image.jpg" : cat.photos[0].medium}" alt="${cat.name}" alt="${cat.name}">
                    </div>
                    <div class="details">
                        <h2>${cat.name}</h2>
                        <p>${cat.description === null ? `${cat.name} has no story to tell as of yet, maybe you can help create one for this cutie` : cat.description}</p>
                        <a href="cat.html?id=${cat.id}">Details</a>
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


fetchCats(URL)

