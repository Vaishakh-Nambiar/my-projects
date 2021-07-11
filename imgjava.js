function change() {
  obj = document.querySelector(".first");
  obj1 = document.getElementById("b1");
  obj2 = document.getElementById("b2");
  obj3 = document.getElementById("b3");

  pic = document.querySelector(".first-right");
  pic1 = document.getElementById("b11");
  pic2 = document.getElementById("b21");
  pic3 = document.getElementById("b31");

  o1 = document.querySelector("#bt1");
  o2 = document.querySelector("#bt2");
  o3 = document.querySelector("#bt3");
  title = document.querySelector(".names h3");

  o1.addEventListener("click", () => {
    obj.style.marginLeft = "0%";
    obj.style.transition = "2s";

    pic.style.marginLeft = "0%";
    pic.style.transition = "2s";

    console.log("clicked");
    console.log(title);
    title.innerText="LAUREATO 42 MM";
    title.style.transition="1s";
    title.style.color="white";
    

  });

  o2.addEventListener("click", () => {
    // o2.style.backgroundColor = "red";
    obj.style.marginLeft = "-100%";
    obj.style.transition = "2s";

    pic.style.marginLeft = "-200%";
    pic.style.transition = "2s";

    console.log("clicked");
    console.log(title);
    title.innerText="CHRONOGRAPH";
    title.style.transition="1s";
    title.style.color="white";

  });

  o3.addEventListener("click", () => {
    obj.style.marginLeft = "-200%";
    obj.style.transition = "2s";

    pic.style.marginLeft = "-395%";
    pic.style.transition = "2s";

    console.log("clicked");
    console.log(title);
    title.innerText="NEO BRIDGES";
    title.style.color="white";
    title.style.transition="1s";
    
  });
}
