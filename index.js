// Elements
import { secondsToHms, convertHMS } from "./utils.js";

const sliderElm = document.querySelector("#music-slider")
const prevEl = document.querySelector("#prev")
const nextEl = document.querySelector("#next")
const masterPlay = document.querySelector("#master-play")
const startEl = document.querySelector("#start")
const endEl = document.querySelector("#end")
const cover = document.querySelector("#cover")

// glob vaiables

let audioIndex = 0;

const audios = [
  {
    songName: "song1.mp3",
    src: "./songs",
    coverPath: "./covers/cover1.jpg",
  },
  {
    songName: "song2.mp3",
    src: "./songs",
    coverPath: "./covers/cover2.jpeg",
  },
  {
    songName: "song3.mp3",
    src: "./songs",
    coverPath: "./covers/cover3.jpg",
  },
  {
    songName: "song4.mp3",
    src: "./songs",
    coverPath: "./covers/cover4.png",
  },
];

let audioElement = new Audio("./songs/song2.mp3")

const handleMasterPlayClick = () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play")
    masterPlay.classList.remove("fa-circle-pause")
  }
};

const handleSlider = () => {
  audioElement.currentTime = (sliderElm.value * audioElement.duration) / 100
};

const handleTimeUpdate = () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  endEl.textContent = convertHMS(audioElement.duration)
  startEl.textContent = secondsToHms(progress)
  sliderElm.value = progress
};

const handleNextAudio = () => {
  audioIndex++
  if (audioIndex > audios.length) {
    alert("end of songs going back to first song")
    audioIndex = 0;
    return
  }
  cover.src = audios[audioIndex].coverPath;
  audioElement.src = `${audios[audioIndex].src}/${audios[audioIndex].songName}`
  audioElement.currentTime = 0;
  audioElement.play();
};

const handlePrevAudio = () => {
  audioIndex--
  if(audioIndex == -1){
     alert("limit")
     return
  }

  cover.src = audios[audioIndex].coverPath
  audioElement.src = `${audios[audioIndex].src}/${audios[audioIndex].songName}`
  audioElement.currentTime = 0;
  audioElement.play();
}

masterPlay.addEventListener("click", handleMasterPlayClick);
audioElement.addEventListener("timeupdate", handleTimeUpdate);
sliderElm.addEventListener("change", handleSlider);
nextEl.addEventListener("click", handleNextAudio);
prevEl.addEventListener("click", handlePrevAudio)
