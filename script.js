const API_KEY = 'U1AcoV0LydlsfjQH4T72RS3cgccXjGh2'
const IMG = document.querySelector("img")
const BUTTON = document.querySelector("button")
const INPUT = document.querySelector("input")
let searchTerm = INPUT.value

// promise-based code
// function fetchGif() {
//     searchTerm = INPUT.value //replaces search query with text inside input
//     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchTerm}`, {mode: `cors`})
//     .then( response => {
//         // the fetch request returns a promise
//         // console.log(response)
//         return response.json()
//     }).then( response => {
//         // console.log(response) // logs the response object
//         // console.log(response.data.images.original.url) // logs the relevant url from the object
//         IMG.src = response.data.images.original.url // changes the img src
//     })
// }

// async/await based code
async function fetchGif() {
    searchTerm = INPUT.value //replaces search query with text inside input

    // saves the response from the initial api request as a variable
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchTerm}`, {mode: `cors`})
    // converts the response from a promise to valid javascript object
    const gifData = await response.json()
    // changes the img src
    IMG.src = gifData.data.images.original.url 
}

BUTTON.addEventListener('click', fetchGif)
INPUT.addEventListener('keyup', event => {
    if (event.keyCode === 13) fetchGif()
})

fetchGif()