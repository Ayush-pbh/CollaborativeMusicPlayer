var player = document.getElementById('myaudiopalyer'); 
var albumart = document.getElementById('albumart'); 

var likedSongs = Array();

var currentPlayingSong = 0;

var songList = ["song1", "song2", "song3"]
var picList = ["pic1.jpg", "pic2.jpg", "pic3.jpg"]



function likeCurrentPlayingSong(){
    likeASong(currentPlayingSong);
}

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
    player.src = "./assets/" + songList[currentPlayingSong] +".mp3";
    // Play the player  
    player.play();
    // Updating the current Song Playing Status
    var playerStatus = document.getElementById('playerStatus');
    playerStatus.innerText = "Current Playing : "+songList[currentPlayingSong];
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

var isMinimized = true;
function toggleMinimizePlayer(){

    var myPlayer = document.getElementsByClassName('player')[0];
    
    if(isMinimized){
        myPlayer.classList.remove('minimize');
        isMinimized = false;
    }
    else{
        myPlayer.classList.add('minimize');
        isMinimized = true;
    }
}

function playSongFromUI(index){
    console.log("Playing Song number : "+index);
    currentPlayingSong = index;
    playSong();
}

function searchSong(){
    // get User Query
    var inputField = document.getElementById('searchquery');
    var query = inputField.value;
    var mySongList = document.getElementsByClassName('songList')[0];
    // search for song in song list
    // Performing Linear Search here!
    
    mySongList.innerHTML = "";

    for (var i = 0; i < songList.length; i++) {  
        
        if (songList[i].includes(query)) {
            // resultsArray.push(songList[i]);
      
        var _s = '<div class="song"><div class="songAlbumArt" style="background-image: url(\'./assets/pic'+(i+1)+'.jpg\') " onclick="playSongFromUI('+i+')"></div><h1 class="songName">'+songList[i]+'</h1><div class="likedSongIcon" onclick="likeASong('+i+')"></div></div>';

            mySongList.innerHTML += _s;
        }
    }
    // now create new song List for UI
    // change Ui
    // Done!
}

function likeASong(index){
    // check whether song is liked or not
    if(likedSongs.includes(index)){
        var myLikedSongIndex = likedSongs.indexOf(index);
        likedSongs.splice(myLikedSongIndex,1);
    }
    else{
        likedSongs.push(index);
    }
}

function printLikedSongs(){
    for(var i = 0; i<likedSongs.length; i++){
        console.log(likedSongs[i]);
    }
}