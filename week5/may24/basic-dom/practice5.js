const rsvpGuestList = [
    "Sophia",
    "Ethan",
    "Amy",
    "Noah",
    "Olivia",
    "Isabelle",
    "Ben",
    "Sammy",
    "Mia",
    "Alex"
]

// Above, you are provided with a dataset of wedding guest attendees. Write some JS code such that each of the 10 empty .rsvp-list-attendee class elements have their inner text replaced from "Empty" to one of the names above. The order of the names should be identical to the order of the array above. 

let guestsComing = document.getElementsByClassName("rsvp-list-attendee")
for (let i = 0; i < guestsComing.length; i++){
    guestsComing[i].innerText = rsvpGuestList[i]
}