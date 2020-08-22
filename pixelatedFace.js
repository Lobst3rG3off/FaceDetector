const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const Facectx = canvas.getContext('2d');

//make a new face detector

const faceDetector = new window.FaceDetector();


//write a function that will populate the users video

function populateVideo() {
    const stream = navigator.mediaDevices.getUserMedia({
        video: {width: 1280, height: 720}
    });
    console.log(stream)
}

console.log(populateVideo)