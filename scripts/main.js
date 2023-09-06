
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc ==="images/HTML5_logo_and_wordmark.png") {
    myImage.setAttribute("src", "images/baby-cat-image.png");
  } else {
    myImage.setAttribute("src", "images/HTML5_logo_and_wordmark.png");
  }
};



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `HTML is cool, ${myName}`;
    }
  }
  


if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `HTML is cool, ${storedName}`;
}


if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `HTML is cool, ${storedName}`;
}


myButton.onclick = () => {
    setUserName();
};


  