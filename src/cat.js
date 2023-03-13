const url = new URL(location.href)
const catId = url.searchParams.get('id')
const APIKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCTlQ2ejhsMlBRc1BOQVF5a2VuTFRmS29Qa2hIaDlJNWd2SUJiblF6eWhRZFowQUNnVSIsImp0aSI6IjRiYWJhZmYyODUwNGY2YTgxNDE1NTk3ZDJiYjc5ZmM3ZTkzZjE5OTExOTIyYzU5ZTZhNzQ4MWFiMmQ5MDc2NTQ3NDEwMWE5M2VmOWFhNDk2IiwiaWF0IjoxNjc3NDMwNjQ0LCJuYmYiOjE2Nzc0MzA2NDQsImV4cCI6MTY3NzQzNDI0NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.jckwXV0MOOBRiXuXs5ecnF7sP2xmLzDCWlwncnwr8Hp0_eLxmNSxhD4MsQMPYm0zlQvOmWFJPJUMMbctmT80elXAMXxdY_fstmV451UHMVF0Hxg6YwlASpUR5gL2WhfsKqFdMoO5q0m6KtEreKGLIuiafTkhEu7w3aYcLHhG6mVXhl6edfx5IttqY9iueLpu9E6j4NG_DK8no_EV9a7_-senIyYb4OJ-w7xBGmRDqbZSEK1Xxbyaw-2BWSkA2N3kRrgGQOIopLcW9OfmYn0I1MmQeLEX4hOyK2xKW1PI6Nz_FeOfX2K-IToufZSNGbfT5EaZSN5ZPwWzcFF0aEfk8w"


const APILink = `https://api.petfinder.com/v2/animals/` + catId

function fetchCat() {
    fetch(APILink, {
        headers: {
            Authorization: `Bearer ${APIKey}`
        }
    })
     .then(response => response.json())
     .then(data => {
        console.log(data.animal)
        const catContainer = document.getElementById('cat-container');

        const cat = data.animal
        const catPage = `
        <div class="cat-image-container">
            <img id="cat-image" src="${cat.photos[0] === undefined ? "./cat-image.jpg" : cat.photos[0].medium}" alt="${cat.name}">
        </div>
        <div class="cat-info">
            <h1 id="cat-name">Say Hello to ${cat.name}!</h1>
            <hr></hr>
            </br>
            </br>
            </br>
            </br>
            <p class="cat-description">${cat.description === null ? `${cat.name} has no story to tell as of yet, maybe you can help create one for this little cutie...` : cat.description}</p>
            <h2 id="cat-color">Color: ${cat.colors.primary}</h2>
            <h2 id="cat-breed">Breed: ${cat.breeds.primary}</h2>
            <h2 id="cat-gender">Gender: ${cat.gender}</h2>
            <h2 id="cat-age">Age: ${cat.age}</h2>
        </div>
        <div>
            <h1 id="contact-header">Contact</h1>
            <div id="contact-container">
                <a id="cat-email" href="mailto: ${cat.contact.email}">Email: ${cat.contact.email}</a></br>
                <a id="cat-phone" href="tel:${cat.contact.phone}">Phone: ${cat.contact.phone}</a>
                <h2 id="cat-location">Location: 
                        ${cat.contact.address.city}\n
                        - ${cat.contact.address.state}
                        - ${cat.contact.address.country}
                </h2>
            </div>
        </div>
        `
        catContainer.insertAdjacentHTML('beforeend', catPage);
        
    })
     .catch(error => {
        console.error('Error fetching cat:', error)
     })
}

fetchCat()