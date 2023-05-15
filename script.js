
let filmCarousel = document.getElementById("infinite_carousel");
let filmCarousel1 = document.getElementById("infinite_carousel1");
let filmCarousel2 = document.getElementById("infinite_carousel2");

let images = document.getElementsByClassName("img_film");

let left_arrow = document.getElementById("left");
let right_arrow = document.getElementById("right");
let left_arrow1 = document.getElementById("left1");
let right_arrow1 = document.getElementById("right1");
let left_arrow2 = document.getElementById("left2");
let right_arrow2 = document.getElementById("right2");


/* Film Items Generator*/
generate(filmCarousel);
generate(filmCarousel1);
loop(filmCarousel1);
generate(filmCarousel2);
loopReverse(filmCarousel2);


/* Arrow addEventsListener */
left_arrow.addEventListener("click", function(){
    loopReverse(filmCarousel);
})
right_arrow.addEventListener("click", function(){
    loop(filmCarousel);
})
right_arrow1.addEventListener("click", function(){
    loop(filmCarousel1);
})
left_arrow1.addEventListener("click", function(){
    loopReverse(filmCarousel1);
})
right_arrow2.addEventListener("click", function(){
    loop(filmCarousel2);
})
left_arrow2.addEventListener("click", function(){
    loopReverse(filmCarousel2);
})

/* Functions */
function loop(element){
    for(i = 0; i < 2; i++){
        let firstEl = element.children.item(0);
        element.appendChild(firstEl);
    }     
}

function loopReverse(element){
    for(i = 0; i < 2; i++){
        let lastEl = element.children.item(17);
        element.insertBefore(lastEl, element.children[0]);
    }
}

function generate(element){
    for(i = 1; i < 19; i++){
        let img = document.createElement("img");
        img.src = "assets/movies/" + i + ".png";
        element.appendChild(img);
        img.classList.add("img_film");
    }
}

