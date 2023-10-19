var player = document.getElementById('myaudiopalyer');
var albumart = document.getElementById('albumart'); 

var currentPlayingSong = 0;

var songList = ["song1.mp3", "song2.mp3", "song3.mp3"]
var picList = ["pic1.jpg", "pic2.jpg", "pic3.jpg"]



function nextSong(){
    if(currentPlayingSong >= songList.length - 1){
        currentPlayingSong = 0;
     }
    else{
        currentPlayingSong = currentPlayingSong + 1;
    }
    console.log("Next Song =>" + currentPlayingSong);
    playSong();
}

function prevSong(){
    // Applying Check for array limits
    if(currentPlayingSong <= 0){
        currentPlayingSong = (songList.length -1);
    }
    else{
        currentPlayingSong = currentPlayingSong - 1;
    }
    
    console.log("prev Song=>"+currentPlayingSong);
    playSong();
}

function playSong(){
    // Console log Current Playing Song.
    console.log("Current Song => "+currentPlayingSong);
    // Change player source to current playing song
    player.src = "./assets/" + songList[currentPlayingSong];
    // Play the player  
    player.play();
    
    //Change the albumart of the current song
    albumart.style.backgroundImage = "url('./assets/" +picList[currentPlayingSong]+ "')";
    // Console log Done!
    console.log("Done!");

}
var isPlaying = false;
function togglePlayPause(){
    if(isPlaying){
        player.pause();
        isPlaying = false;
    }
    else{
        player.play();
        isPlaying = true;
    }
}