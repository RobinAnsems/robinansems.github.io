var vid = document.getElementById("zerostate");
vid.muted = true;


function functie1() {
    var video = document.getElementById("zerostate");
    video.src = "content/1%20-%2010%20sec.mp4"; 
    video.loop = false;
    vid.muted = false;
    video.play();
    document.getElementById('zerostate').addEventListener('ended' , reload, false);
    
    function reload() {
        location.reload();
    }
}


function functie2() {
    var video = document.getElementById("zerostate");
    video.src = "content/2%20-%209%20sec.mp4"; 
    video.loop = false;
    vid.muted = false;
    video.play();
    document.getElementById('zerostate').addEventListener('ended' , reload, false);
    
    function reload() {
        location.reload();
    }
}


function functie3() {
    var video = document.getElementById("zerostate");
    video.src= "content/3%20-%209%20sec.mp4"; 
    video.loop = false;
    vid.muted = false;
    video.play();
    document.getElementById('zerostate').addEventListener('ended' , reload, false);
    
    function reload() {
        location.reload();
    }
}

function functie4() {
    var video = document.getElementById("zerostate");
    video.src= "content/0%20-%2012%20sec.mp4"; 
    video.loop = true;
    vid.muted = false;
    video.play();
    document.getElementById('zerostate').addEventListener('ended' , reload, false);
    
    function reload() {
        location.reload();
    }
}





//var video = document.getElementsByClassName('zerostate');
//
//document.getElementById('icoon4').addEventListener('click', function () {
//    video.muted = false;
//});
