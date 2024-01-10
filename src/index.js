console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded",()=> {
    //fetch data from API
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res)=>res.json())
    .then((data) => {
        console.log(data)
        const imgUrls = data.message
        console.log(imgUrls)
        
        imgUrls.forEach((imgUrl) => {
            //create image
            const image = document.createElement("img")
            image.id = "dog-image"
            // image.style.width = "400px" 
            // image.style.height = "400px"
            image.src = imgUrl
            const imageContainer = document.querySelector("#dog-image-container")
            imageContainer.appendChild(image)
        });
    })
})

