const API_KEY = 'U1AcoV0LydlsfjQH4T72RS3cgccXjGh2'
const img = document.querySelector('img')

fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=cats`, {mode: `cors`}).then(function(response) {
    console.log(response.json())
})