const API_KEY = 'U1AcoV0LydlsfjQH4T72RS3cgccXjGh2'
const img = document.querySelector("img")

fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=cats`, {mode: `cors`})
    .then( response => {
        // the fetch request returns a promise
        console.log(response)
        return response.json()
    }).then( response => {
        console.log(response) // logs the response object
        console.log(response.data.images.original.url) // logs the relevant url from the object
        img.src = response.data.images.original.url
    })