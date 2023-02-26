

const APIKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCTlQ2ejhsMlBRc1BOQVF5a2VuTFRmS29Qa2hIaDlJNWd2SUJiblF6eWhRZFowQUNnVSIsImp0aSI6Ijk3NTA4OTllNGUzNTQxOTE3ZDZmNzAxMGM4NmI5ZDc0MzlkODE5YWQwNjVlZTQ3NDE2ZmRiMDU4NDZiYjhlMWZiNzEzZTdmM2Q0ZWU1NTA2IiwiaWF0IjoxNjc3NDAwNjAyLCJuYmYiOjE2Nzc0MDA2MDIsImV4cCI6MTY3NzQwNDIwMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.mclp882MxGDpKrYG9xWFt4Vq0Z7D2M1XnOiRyvmc77zXmgzaf2XzuHJzwWwYgZ5aFMaP08HC6ZEBScKnQgskxw4rrfgJRZ6OHxyAs_1VbRV4cAU1LXK3gHjyVqBb_h62tQshlxGr1xLG2lQTVbVDQwUpLY8PxWhR8yWfqMIRkpVKW2Znkr70thP34BUiPsfwU0ZoQd6B2y-b1p7hMmdThcLzJrvdHJpHzk56rfRn11Pp67KwuddqAxBd7X-aYgRO1P2b8ej7gGPOw5BHqyMY2psh5GuTRKz6aKSgA4FddLbYhu8YSylMVHmsJtK6s5ojZDkHaUCy069WrtToV5gMjQ"
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

