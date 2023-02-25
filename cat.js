const url = new URL(location.href)
const catId = url.searchParams.get('id')
const APIKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCTlQ2ejhsMlBRc1BOQVF5a2VuTFRmS29Qa2hIaDlJNWd2SUJiblF6eWhRZFowQUNnVSIsImp0aSI6ImQ1NzFjOWI1NTc0NDQzZDU4YTBlZWZkMjI1ZGQ4MWY4NDUyNDZlZjI4MDc0Y2MzNGJlNjA3ZGQyOGM0ZjUzMDgxOTZlYTIwYWZkNzRkMDE1IiwiaWF0IjoxNjc3MzI4ODg5LCJuYmYiOjE2NzczMjg4ODksImV4cCI6MTY3NzMzMjQ4OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.nDAaYE9H6zqMDU33kJA-yjEiTDEw08fnaVhtvKaBbTPtLz9OjFouYn2z79u3KFlJZw8LUB-6yRL86UCra8fGY9DWyc9vDb4HuFJ3HD8NAzkXk3hBLzXwtKcSijkj3nFkLPbxrKsgNXX274ncgRC4VwRi49xVjWKmJHzZs6WGau5hdyoC9XGN6aJuLGorApX65NLDG0zFlqaY2BjaFB4NyHPkY4UtXqnnMCuBHk_eq5rgK1air9ou1IpwurZ7EuQ5odJ-5aGs9zcMBWGKuyRv2lYlYyJjCpGRS_Or_CiOeSB4VP7eGqX-lb7RjUeDV2pkAhhypL7vd0nUE1R6XnCLNw"


const APILink = `https://api.petfinder.com/v2/animals/` + catId

function fetchCat() {
    fetch(APILink, {
        headers: {
            Authorization: `Bearer ${APIKey}`
        }
    })
     .then(response => response.json())
     .then(data => {
        console.log(data)
    })
     .catch(error => {
        console.error('Error fetching cat:', error)
     })
}

fetchCat()