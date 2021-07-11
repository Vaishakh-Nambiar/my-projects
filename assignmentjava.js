var items = [
    "“Don't watch the clock; do what it does. Keep going. ”",
    "“The hours of folly are measured by the clock; but of wisdom, no clock can measure.”",
    "“The two most powerful warriors are patience and time.”",
  ];
  
  var c = document.querySelector(".intext");
  function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  console.log(random_item(items));
  let r = random_item(items);
  c.innerHTML = r;
  
  gsap.registerPlugin(ScrollTrigger);
  var w = window.innerWidth;
  var h = window.innerHeight;
  
  
  gsap
    .timeline({ defaults: { ease: "power1.out" } })
    .to(".intro-text", { y: "0%", duration: 1.5, stagger: 0.25 })
  
    .from(".intext", { y: "0%", duration: 1.5, stagger: 0.25, opacity: 0 })
    .to(".intext", { y: "0%", duration: 1.5, stagger: 0.25, opacity: 1 })
  
    .to(".slider", { y: "-100%", duration: 1.5, delay: 1 })
    .to(".intro", { y: "-100%", duration: 2 }, "-=3");
  
  gsap.from(".brand", { y: -h + 100, duration: 2, delay: 6, opacity: 0.2 });
  gsap.to(".brand", { y: 5, duration: 2, delay: 6, opacity: 1 });
  
  gsap.from(".svgown", { y: -h + 100, duration: 2, delay: 6, opacity: 0.2 });
  gsap.to(".svgown", { y: 30, duration: 2, delay: 6, opacity: 1 });
  
  
  gsap.timeline({
    scrollTrigger: {
      trigger: ".section1",
      start: "center center ",
      end: "bottom top",
      markers: true,
      scrub: true,
    },
  });
  
  
  console.clear();
  
  const minuteHand = document.querySelector(".face .hand1");
  const hourHand = document.querySelector(".face .hand2");
  
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
  const base = 90;
  
  let sec = base + (360 / 60) * seconds;
  let min = base + (360 / 60) * minutes;
  let hr = base + (360 / 12) * hours;
  
  const tick = () => {
    const time = new Date();
  
    sec += 360 / 60;
    min += 360 / 60 / 60;
    hr += 360 / 60 / 60 / 12;
  
    minuteHand.style.transform = `rotate(${min}deg)`;
    hourHand.style.transform = `rotate(${hr}deg)`;
  };
  
  setInterval(tick, 1000);