//about us: reference: https://codepen.io/dmz2117/pen/RwLKOyz

let aboutModalEl = document.querySelector("#aboutUsModal");

function aboutUs() {
  aboutModalEl.style.display = "block";
}

function closeModal() {
  aboutModalEl.style.display = "none";
}

//contact us session reference: https://stackoverflow.com/questions/16308779/how-can-i-hide-show-a-div-when-a-button-is-clicked
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert

let contactEl = document.getElementById("contactForm");

function show(d) {
  if (d.style.display == "none") {
    d.style.display = "block";
  } else {
    d.style.display = "none";
  }
}
function hide(d) {
  d.style.display = "none";
  alert("Thank you for submitting your message!");
}

// slide show

var slideIndex = 0;
showSlide();

function showSlide() {
  var i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlide, 4000);
}

//sign-up and log-in session
function showContent(s) {
  saveName();
  event.preventDefault(); 
  document.getElementById("logSignPlace").innerHTML = document.getElementById(s).innerHTML;
}

function forgetPassword() {}

//personalization part
//welcome with user name by updating innerHTML from certain input
function saveName() {
  //   Reference to prevent default: https://www.codegrepper.com/code-examples/javascript/how+to+stop+submit+form+in+javascript
  event.preventDefault();
  var uni = document.getElementById("uni").value;
  document.querySelector("#theUni").innerHTML = uni;
}

// data: name
var email = undefined;
var password = undefined;
var phone = undefined;
var schoolAffiliation = undefined;
var program = undefined;
var imageURL = "https://aaronkaufman.com/img/avatar.jpg";

// personalization
// var fullName = "Anonymous";

// function setName() {
//   // var fullName = prompt("What is your full name?");
//   document.querySelector("#inputName").textContent = fullName;
// }

// function printName() {
//   document.querySelector("#nameInput").textContent = fullName;
// }

// matching scene
let dayEl = "";
let timeEl = "";
function printMatch() {}

//////// THIS IS WHERE THE MATCHING SCENE HAPPEN ////////////

// dataset

let database = [
  {
    number: 1,
    name: "Arya Stark",
    dayAvailable: "Today",
    timeAvailable: "08.00-12.00",
    preference: "discussion",
    location: "Butler Library",
    school: "Barnard College",
    imageURL:
      "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Elle/2019/03/27/20139/ARYA-STARK.jpg",
    workingOn: "Midterm business plan"
  },
  {
    number: 2,
    name: "Bran Stark",
    dayAvailable: "Today",
    timeAvailable: "12.00-16.00",
    preference: "quite time",
    location: "Uris Hall",
    school: "Columbia Business School",
    imageURL:
      "https://i.pinimg.com/originals/f3/13/a7/f313a7854935e7371106bc50220ee45d.png",
    workingOn: "Stakeholders Mapping Project"
  },
  {
    number: 3,
    name: "Cersei Lannister",
    dayAvailable: "Today",
    timeAvailable: "16.00-20.00",
    preference: "brainstorming",
    location: "Lerner Hall",
    school: "School of General Studies",
    imageURL:
      "https://pyxis.nymag.com/v1/imgs/302/c04/8ba17642445da29d891de65a293594c5eb-s1-e1.rsquare.w768.jpg",
    workingOn: "Postbac Premed First Exam Prep"
  },
  {
    number: 4,
    name: "Daenerys Targaryen",
    dayAvailable: "Today",
    timeAvailable: "20.00-24.00",
    preference: "quite time",
    location: "Riverside Park",
    school: "Columbia Law School",
    imageURL:
      "https://pbs.twimg.com/profile_images/1117967801652617216/i8PWXebo_400x400.jpg",
    workingOn: "Constitutional Law Exam"
  },
  {
    number: 5,
    name: "Eddard Stark",
    dayAvailable: "Tomorrow",
    timeAvailable: "08.00-12.00",
    preference: "discussion",
    location: "Law Bridge",
    school: "Teachers College",
    imageURL:
      "https://static.wikia.nocookie.net/elder-scrolls-fanon/images/1/11/Eddard-Stark-with-Ice-lord-eddard-ned-stark-24488596-1066-1600.jpg",
    workingOn: "Comparative Analysis of Curriculum"
  },
  {
    number: 6,
    name: "Robb Stark",
    dayAvailable: "Tomorrow",
    timeAvailable: "12.00-16.00",
    preference: "brainstorming",
    location: "Butler Library",
    school: "Graduate Schools of Arts and Science",
    imageURL: "https://thronesapi.com/assets/images/robb-stark.jpg",
    workingOn: "Midterm Papers"
  },
  {
    number: 7,
    name: "Sansa Stark",
    dayAvailable: "Tomorrow",
    timeAvailable: "16.00-20.00",
    preference: "quite time",
    location: "Lerner Hall",
    school: "College of Dental Medicine",
    imageURL: "https://thronesapi.com/assets/images/sansa-stark.jpeg",
    workingOn: "Finishing my reading for exam"
  },
  {
    number: 8,
    name: "Jon Snow",
    dayAvailable: "Tomorrow",
    timeAvailable: "20.00-24.00",
    preference: "discussion",
    location: "In front of Columbia Journalism School",
    school: "Columbia Journalism School",
    imageURL: "https://thronesapi.com/assets/images/jon-snow.jpg",
    workingOn: "My paper for comparative global news course"
  },
  {
    number: 9,
    name: "Margaery Tyrell",
    dayAvailable: "The Day After Tomorrow",
    timeAvailable: "08.00-12.00",
    preference: "brainstorming",
    location: "College Walk",
    school: "Graduate Schools of Arts and Science",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Margaery_Tyrell_in_the_Gardens.jpg/220px-Margaery_Tyrell_in_the_Gardens.jpg",
    workingOn: "My business idea"
  },
  {
    number: 10,
    name: "Samwell Tarly",
    dayAvailable: "The Day After Tomorrow",
    timeAvailable: "12.00-16.00",
    preference: "quite time",
    location: "Gottesman Library",
    school: "Teachers College",
    imageURL:
      "https://www.newstatesman.com/wp-content/uploads/sites/2/2021/06/sam_tarly.jpg",
    workingOn: "Teaching and Curriculum"
  },
  {
    number: 11,
    name: "Brienne of Tarth",
    dayAvailable: "The Day After Tomorrow",
    timeAvailable: "16.00-20.00",
    preference: "brainstorming",
    location: "Uris Hall",
    school: "School of Professional Studies",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Brienne_of_Tarth-Gwendoline_Christie.jpg/220px-Brienne_of_Tarth-Gwendoline_Christie.jpg",
    workingOn: "Creative Leadership Course Assignment"
  },
  {
    number: 12,
    name: "Tywin Lannister",
    dayAvailable: "The Day After Tomorrow",
    timeAvailable: "20.00-24.00",
    preference: "discussion",
    location: "Morningside Park",
    school: "Mailman School of Public Health",
    imageURL:
      "https://modernpaintbynumbers.com/wp-content/uploads/2020/08/Game-Thrones-Tywin-Lannister.jpg",
    workingOn: ""
  },
  {
    number: 13,
    name: "Tyrion Lannister",
    dayAvailable: "Today",
    timeAvailable: "16.00-20.00",
    preference: "discussion",
    location: "Morningside Park",
    school: "School of Professional Studies",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Tyrion_Lannister-Peter_Dinklage.jpg/220px-Tyrion_Lannister-Peter_Dinklage.jpg",
    workingOn: "Programming Framework"
  },
  {
    number: 14,
    name: "Jamie Lannister",
    dayAvailable: "The Day After Tomorrow",
    timeAvailable: "12.00-16.00",
    preference: "brainstorming",
    location: "Butler Library",
    school: "Columbia Business School",
    imageURL:
      "https://pyxis.nymag.com/v1/imgs/dfc/159/79eb9a7477f9786ec3aeaaa216ce831df8-13-Jaime-Lannister-b.rvertical.w600.jpg",
    workingOn: "My business plan!"
  },
  {
    number: 15,
    name: "Jaqen H'ghar",
    dayAvailable: "Tomorrow",
    timeAvailable: "08.00-12.00",
    preference: "quite time",
    location: "Everywhere",
    school: "Graduate Schools of Arts and Science",
    imageURL:
      "https://imgix.bustle.com/uploads/image/2020/4/21/2bc1e7ad-d4b4-4c6c-ad7f-4fa9e54d2196-jaqen.jpg?w=350&h=298&fit=crop&crop=faces&auto=format%2Ccompress",
    workingOn: "Everything"
  },
  {
    number: 16,
    name: "Ygritte",
    dayAvailable: "Tomorrow",
    timeAvailable: "20.00-24.00",
    preference: "discussion",
    location: "Law Library",
    school: "Columbia Law School",
    imageURL:
      "https://i.pinimg.com/originals/39/c4/40/39c44089b11e12e5095b73da33b1ceaf.jpg",
    workingOn: "Constitutional Law assignment"
  }
];

///// alright... let's set everything into places
var e = document.getElementById("inputDay").innerHTML;
document.getElementById("inputTime").innerHTML;
var trackDay;
var trackTime;
var filteredData = [];

function track(insert) {
  trackDay = insert;
  console.log(insert);
}

function track2(insert) {
  trackTime = insert;
  console.log(insert);
}

///// THIS IS WHERE THE MAGIC HAPPEN
function printMatch() {
  filteredData = [];
  var arrayLength = database.length;
  for (var i = 0; i < arrayLength; i++) {
    if (
      database[i].dayAvailable == trackDay &&
      database[i].timeAvailable == trackTime
    ) {
      // Reference for "push": https://www.w3schools.com/jsref/jsref_push.asp
      filteredData.push(database[i]);
      console.log(filteredData);
    }
  }
  let html = "";
  for (let match of filteredData) {
    html += setData(match); // Create 1 .match, and add that to the growing HTML
  }
  document.querySelector("#matchFound").innerHTML = html; // Print all HTML at once.
}

///// THIS IS WHERE IT SHOULD PRINT OUT SOME MATCHES
function setData(matchData) {
  return `<div class="card" style="width:18rem;text-align:center">
          <img src="${matchData.imageURL}" style="max-width: 200px"">
          <div class="card-body">
            <h3 class="card-title">${matchData.name}</h3>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">I'm from ${matchData.school}</li>
            <li class="list-group-item">I need a buddy to work for ${matchData.workingOn}</li>
            <li class="list-group-item"> I'll be available ${matchData.dayAvailable} at ${matchData.timeAvailable} in ${matchData.location} </li>
          </ul>
          <div class="card-body">
            <a href="mailto:someone@yoursite.com">Contact me</a>
          </div>
        </div>`;
}

//5-star rating system
//change innerHTML of the stars when click
function starFunction(indexNum) {
  var starList = document.querySelectorAll(".star");
  for (let j = 0; j < starList.length; j++) {
    starList[j].innerHTML = "☆";
  }
  for (let x = 0; x < indexNum; x++) {
    starList[x].innerHTML = "★";
  }
}
