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

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}

// video.play();

function playVideo() {
    console.log(this);
}

playVideo();