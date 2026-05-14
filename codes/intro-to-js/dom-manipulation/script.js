// document means we're talking about the webpage
// document also means our DOM elements
// document

// alert("Hello World!");

// 2 ways to select an element
// 1. getElementById, getElementsByClassName, getElementsByTagName


const myDiv = document.getElementById("my-div");
console.log(myDiv);

// 2. querySelector
// Mimics how we write CSS selectors
// Element Selector - selects by element name
// Class Selector - selects by class name
// Id Selector - selects by id name

const myHeading = document.querySelector("h1");
const allParagraphs = document.querySelectorAll(".paragraph");
const myParagraph = document.querySelector("#my-paragraph-1");

const myParagraph1 = document.querySelector('.paragraph');

console.log(myParagraph1);

const allImages = document.querySelectorAll("img");
// console.log(allImages);

for (let i = 0; i < allImages.length; i++) {
    const image = allImages[i];
    console.log(image);

    // adjust all the images to be 200px by 200px
    image.style.width = "200px";
    image.style.height = "200px";
}

myHeading.style.color = "blue";


const mySurpriseBtn = document.querySelector("#surprise-btn");
const helloDiv = document.querySelector(".hello-world");

// mySurpriseBtn.addEventListener("click", () => {
//     alert("Surprise!");
// });

const surpriseBtnHandler = () => {
  helloDiv.textContent = "Surprise!";
  helloDiv.style.fontSize = "80px";
}

mySurpriseBtn.addEventListener("click", surpriseBtnHandler);

