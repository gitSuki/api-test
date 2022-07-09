const API_KEY = 'U1AcoV0LydlsfjQH4T72RS3cgccXjGh2'
const IMG = document.querySelector("img")
const BUTTON = document.querySelector("button")
const INPUT = document.querySelector("input")
let searchTerm = INPUT.value

function fetchGif() {
    searchTerm = INPUT.value
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchTerm}`, {mode: `cors`})
    .then( response => {
        // the fetch request returns a promise
        // console.log(response)
        return response.json()
    }).then( response => {
        // console.log(response) // logs the response object
        // console.log(response.data.images.original.url) // logs the relevant url from the object
        IMG.src = response.data.images.original.url // changes the img src
    })
}

BUTTON.addEventListener('click', fetchGif)
INPUT.addEventListener('keyup', event => {
    if (event.keyCode === 13) fetchGif()
})

fetchGif()