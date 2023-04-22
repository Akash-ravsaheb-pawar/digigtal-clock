let cl = console.log;
digitalClock = document.getElementById("digitalClock")


const setzero = (num) => num  < 10 ? "0" + num : num;
function createdigitalClock(){
   let d  = new Date();

   let hr = d.getHours();
   let min = d.getMinutes();
   let sec = d.getSeconds();


   let session = "AM";
   if(hr >= 12) {
      hr = hr -12;
      session = "pm"
   }








   let result = `${setzero(hr)} : ${setzero(min)} : ${setzero(sec)} ${session}`;
   digitalClock.innerHTML = result;
   setTimeout(() => {
      createdigitalClock();
   }, 1000);

}
createdigitalClock()


// function digitalClock()