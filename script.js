console.log("Welcome to spotify");
//initializethe vriables
let songIndex = 0;
let audioElement = new Audio('Husn(PaglaSongs).mp3');
let masterPlaybtn = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgessBar');
let gif = document.getElementById('gif');
let songs = [
    {songName:"Salam-e-Ishq", filepath:"song/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"song/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"song/1.mp3", coverpath:"covers/1.jpg"},
]


masterPlaybtn.addEventListener('click',()=>{ 
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlaybtn.classList.remove('fa-play-circle');
        masterPlaybtn.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlaybtn.classList.remove('fa-pause-circle');
        masterPlaybtn.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
    })
audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100) ;
    myProgressBar.value = progress;
})