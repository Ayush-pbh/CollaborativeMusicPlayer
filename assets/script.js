var lokesh = document.getElementById('myaudiopalyer');



var isPlaying = false;

function togglePlayPause(){
    
    if(isPlaying){

        lokesh.pause();
        isPlaying = false;

    }
    else{
        
        lokesh.play();
        isPlaying = true;

    }
}