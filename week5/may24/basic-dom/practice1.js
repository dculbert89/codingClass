// #1: First, change the font family and font color of the h2 header to "Times New Roman" and pink, respectively. 

let h2Paragraph = document.getElementsByTagName("h2")[0]

    h2Paragraph.style.color = "pink"
    h2Paragraph.style.fontFamily = "'Times New Roman'"


// #2: Then, change the #main-banner-text id element to a larger font size than its default size, and give it a new border and font color of your choice. 

let jessesBannerText = document.getElementById("main-banner-text")

 jessesBannerText.style.fontSize = "32px"
 jessesBannerText.style.border = "2px solid black"
 jessesBannerText.style.color = "lightblue"

// #3: Lastly, change the display styling of the form to be a flexbox rather than its default value. Then, make sure that the form's flex direction is set to a column, rather than its default row alignment. 

let contactForm = document.getElementsByClassName("contact-forms")[0]

contactForm.style.display = "flex";
contactForm.style.flexDirection = "column";
