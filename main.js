var review = [
{
    image: "./images/photo-0.jpeg", 
    name: "Julia", 
    star: "5 Stars", 
    comment: "In condimentum libero lorem, eget mattis lectus tempus et. In iaculis, nibh et rhoncus accumsan, turpis est pharetra libero, ac aliquam urna metus sit amet velit."
},
{
    image: "./images/photo-1.jpeg", 
    name: "Kevin", 
    star: "4.5 Stars", 
    comment: "Pellentesque ac commodo elit, vel ultrices dolor. Aenean eget dolor tellus."
},
{
    image: "./images/photo-2.jpeg", 
    name: "Jackson", 
    star: "5 Stars", 
    comment: "Morbi nisl sem, vehicula sit amet congue nec, commodo sit amet ante. Phasellus et vestibulum velit. Phasellus sit amet placerat velit."
},    
{   
    image: "./images/photo-3.jpeg", 
    name: "James", 
    star: "4.8 Stars", 
    comment: "Aenean sed accumsan justo. Nulla porta augue non lacus laoreet, id ultricies felis vestibulum. Aenean eu fermentum odio."
},
{
    image: "./images/photo-4.jpeg", 
    name: "Beth", 
    star: "5 Stars", 
    comment: "Pellentesque vestibulum id mi ac rhoncus. Vestibulum tristique mollis placerat. Fusce vel metus orci."
}];

var reviewIndex = 0
// var image = review.name;
console.log("This is the reviewrs name", review[reviewIndex].name)
console.log("This is the review image", review[reviewIndex].image);

const buttons = document.querySelectorAll(".btn");
const imageDiv = document.querySelector(".image");

changeReview = () => {
    currentReview = review[reviewIndex];
    console.log("Current review in change review function", currentReview)

    // document.querySelector(".image").innerHTML = `url(${currentReview.image})`;
    document.querySelector(".name").innerHTML = currentReview.name;
    document.querySelector(".star").innerHTML = currentReview.star;
    document.querySelector(".comment").innerHTML =
    currentReview.comment;
    imageDiv.style.backgroundImage = `url(${currentReview.image})`;
}

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        if (button.classList.contains("backBtn")) {
            reviewIndex--
        if (reviewIndex < 0) {
            reviewIndex = review.length - 1;
        }    
            changeReview()
        }
        if (button.classList.contains("forwardBtn")) {
            reviewIndex++
        if (reviewIndex > review.length -1) {
            reviewIndex = 0;
        }
            changeReview()
        }
    });
});