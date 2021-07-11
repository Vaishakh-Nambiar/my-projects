console.clear();

const minuteHand = document.querySelector('.face .hand1');
const hourHand = document.querySelector('.face .hand2');

const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();

const base = 90;

let sec = base + ((360 / 60) * seconds);
let min = base + ((360 / 60) * minutes);
let hr = base + ((360 / 12) * hours);

const tick = () => {
  
  const time = new Date();
  
  sec += (360 / 60);
  min += ((360 / 60) / 60);
  hr += (((360 / 60) / 60) / 12);

//   secondHand.style.transform = `rotate(${sec}deg)`;
  minuteHand.style.transform = `rotate(${min}deg)`;
  hourHand.style.transform = `rotate(${hr}deg)`;
//   console.log(_seconds)
//   console.log(_minutes)
//   console.log( _hours)

}

setInterval(tick, 1000);