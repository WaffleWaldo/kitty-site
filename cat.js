const url = new URL(location.href)
const catId = url.searchParams.get('id')
const APIKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCTlQ2ejhsMlBRc1BOQVF5a2VuTFRmS29Qa2hIaDlJNWd2SUJiblF6eWhRZFowQUNnVSIsImp0aSI6Ijk3NTA4OTllNGUzNTQxOTE3ZDZmNzAxMGM4NmI5ZDc0MzlkODE5YWQwNjVlZTQ3NDE2ZmRiMDU4NDZiYjhlMWZiNzEzZTdmM2Q0ZWU1NTA2IiwiaWF0IjoxNjc3NDAwNjAyLCJuYmYiOjE2Nzc0MDA2MDIsImV4cCI6MTY3NzQwNDIwMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.mclp882MxGDpKrYG9xWFt4Vq0Z7D2M1XnOiRyvmc77zXmgzaf2XzuHJzwWwYgZ5aFMaP08HC6ZEBScKnQgskxw4rrfgJRZ6OHxyAs_1VbRV4cAU1LXK3gHjyVqBb_h62tQshlxGr1xLG2lQTVbVDQwUpLY8PxWhR8yWfqMIRkpVKW2Znkr70thP34BUiPsfwU0ZoQd6B2y-b1p7hMmdThcLzJrvdHJpHzk56rfRn11Pp67KwuddqAxBd7X-aYgRO1P2b8ej7gGPOw5BHqyMY2psh5GuTRKz6aKSgA4FddLbYhu8YSylMVHmsJtK6s5ojZDkHaUCy069WrtToV5gMjQ"


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