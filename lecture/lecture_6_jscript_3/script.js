// scope
// function greet() {
//     console.log("Hello World");
// }

// const greet = () => console.log("Hello World");

// greet();

// const number = 1;

// function start() {
//     const number = 2;
//     console.log(number);

    // const message = "hi";
    // console.log(message);

    // if (true) {
    //     const another = "bye";
    // }

    // console.log(another);

    // for (let i=0; i<5; i++) {
    //     console.log(i);
    // }
// }

// function stop() {
//     const message = "bye";
// }

// console.log(number);

// start();
// console.log(message);


// this keyword
// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// }

// video.play();

// function playVideo() {
//     console.log(this);
// }

// playVideo();

console.log("Hello World");

var photoElement = document.getElementById("apod");
var title = document.getElementById("title");
var body = document.getElementById("body");
var photoTwo = document.getElementById("nasa");

fetch("https://api.nasa.gov/planetary/apod?api_key=XUgYdeMpsah8uIoRuJF1shwhJLcBhbTK89feSecC")
    .then(
    (response) => response.json()
    ).then(
    (data) => {
        console.log(data);
        photoElement.setAttribute("src", data.url);
        title.innerHTML = data.title;
        body.innerHTML = data.explanation;
    }
);

fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XUgYdeMpsah8uIoRuJF1shwhJLcBhbTK89feSecC").then(
    (response) => response.json()
).then(
    (data) => {
        console.log(data.photos[90]);
        photoTwo.setAttribute("src", data.photos[90].img_src);
    }
);