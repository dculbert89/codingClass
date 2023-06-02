// Make sure to have access to the data we want to render. Write an async function.
// Below is an array. Use an API later. This is for demo purposes

let arrofMovies = [
    {
     name: "Titanic",
     genre: "romance",
     rating: 9,
     furtherDetails: {
        description: "lorem ipson",
        criticReview: "Why Didn't leo just move???"
     },   
    },
    {
        name: "The Departed",
        genre: "crime",
        rating: 8,
        furtherDetails: {
            description: "lorem ipson",
            criticReview: "Why Didn't leo just move???"
        },
    },
    {
        name: "Talladega Nights",
        genre: "comedy",
        rating: undefined,
        furtherDetails: {
            description: "lorem ipson",
            criticReview: "Why Didn't leo just move???"
        },
    },
    {
        name: "Sharknado",
        genre: "comedy",
        rating: 11,
        furtherDetails: {
            description: "lorem ipson",
            criticReview: "Why Didn't leo just move???"
        },
    }
]

// To use data and render to DOM. createElement appendChild

function renderMovies() {

    // create varaible for the HTML element
    let movieContainerElement = document.getElementById("movies-container")

    // loop through 
    for (let i = 0; i < arrofMovies.length; i++){
        // helper variable for Index
        let currentMovie = arrofMovies[i];

        // make new variable for each 
        let newMovieElement = document.createElement("div")

        // I want to write inside the new Element above
            // .style  .innertext  
            // .classlist
            // .add ("name-of-new-class")
            // .remove 
            // .contains

            newMovieElement.innerText = `Name: ${currentMovie.name}. Genre: ${currentMovie.genre}. Rating: ${currentMovie.rating}`

            // you can add a class to the element
            newMovieElement.classList.add("single-movie-element")


            // Want to make a button?? Here ya go!
            // Want the button to go to a different page? use Event listeners
            let newButton = document.createElement("button")
            newButton.innerText = "See Details"

            newButton.addEventListener("click", () => {
                
            // now we have event listener, we want to store info on browser using local storage. MANAGE OUR STATE DATA
                // localStorage syntax:
                    // localStorage.setItem("nameOfYourKey, actualDataYouWantToStore")
                localStorage.setItem("movieTitle", currentMovie.name)
                localStorage.setItem("criticReview", arrofMovies[i].furtherDetails.criticReview)
                localStorage.setItem("movieDesc", arrofMovies[i].furtherDetails.description)


            // Now we cached the data, we want to navigate to the details page
                // skele syntax:
                    // window.location.href= "newPathUrl"
                window.location.href= "movie-details.html"
            })


            newMovieElement.appendChild(newButton)

            // 

            // new element is still floating so add (append/prepend) to container
            movieContainerElement.appendChild(newMovieElement)

    }
}

// INVOKE!!
renderMovies()


