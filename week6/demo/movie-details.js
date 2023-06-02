// Soon as i navigated to new page, I want to access the cached data in Local Storage

window.onload = function () {
    // syntax
        // localStorage.getItem("nameOfKey")
let movieTitle = localStorage.getItem("movieTitle")
let movieDescription = localStorage.getItem("movieDescriptio")
let movieReview = localStorage.getItem("criticReview")

let movieDetailsContainer = document.getElementById("movie-details-container")

let newTitleEle = document.createElement("p")
newTitleEle.innerText = movieTitle
movieDetailsContainer.appendChild(newTitleEle)

}