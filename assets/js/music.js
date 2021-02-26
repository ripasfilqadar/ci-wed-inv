var audio, playbtn, mutebtn, seek_bar;
function initAudioPlayer(){
	playbtn = document.getElementById("playpausebtn");
	playbtn.addEventListener("click",playPause);
	playbtn.click();
	audio = new Audio("assets/music/bg.mp3");
	audio.loop = true;
	audio.muted = true;
	audio.play();
	audio.muted = false;
	audio.play();
	// Set object references
	// mutebtn = document.getElementById("mutebtn");
	// Add Event Handling
	// mutebtn.addEventListener("click", mute);
	// Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		    // playbtn.style.background = "url(img/pause.png) no-repeat";
	    } else {
		    audio.pause();
		    // playbtn.style.background = "url(img/play.png) no-repeat";
	    }
	}
}
window.addEventListener("load", initAudioPlayer);


a = document.getElementById("playpausebtn");
a.click();

$('body').on('click',initAudioPlayer);