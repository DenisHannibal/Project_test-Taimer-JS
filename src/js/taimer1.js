 var output=document.querySelector("#output1");
 var btnStart = document.querySelector("#start1");
 var btnReset = document.querySelector("#reset1");

var interval=undefined;
var milliSec = 0;
var sec= 0;
var min = 0;
var hr=0;
var time=""; 

 btnStart.addEventListener("click", function () 
 {
   if (btnStart.innerHTML==="START") 
   {
     start();
     btnStart.innerHTML="STOP";
   }
   else
   {
     stop();
     btnStart.innerHTML = "START";
   }
  });
 btnReset.addEventListener("click", function () 
 {
   if (btnStart.innerHTML === "START") 
   {
    reset(); 
   }
  });
 function start() 
 {
   interval=setInterval(run,10);
   function run() 
   {
     milliSec++;
     if(milliSec>99) {
       sec++;
       milliSec=0;}

     if (sec > 59) {
       min++;
       sec = 0;
     }

     if (min > 59) {
       hr++;
       min = 0;
     }

     if (hr<10)  time="0"+hr; 
     else time=""+hr;

     if (min < 10) time += ":0" + min; 
     else time += ":" + min;

     if (sec < 10) time += ":0" + sec;
     else time += ":" + sec;

     if (milliSec < 10) time += ":0" + milliSec;
     else time += ":" + milliSec;

     output.innerHTML=time;
    }
  }
   function stop() {
     clearInterval(interval);
   }
   
   function reset() {
     time="";
      milliSec = 0;
      sec = 0;
      min = 0;
     hr = 0;
     output.innerHTML="00:00:00:00";
   }