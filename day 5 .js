// Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
//ANS
document.querySelector("button").addEventListener("click", () => {
    let head = document.querySelector("h1");
    head.innerText = "MERN stack";
  });
  
  // Write code to get 1st H1 element from a webpage using DOM
  //ANS
  document.getElementsByTagName("h1")[0];
  document.querySelectorAll("h1")[0];
  document.querySelector("h1");
  

  // Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
  //ANS
  function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
    }
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
      
    let time = hh + ":" + mm + ":" + ss + " " + session;
   
    let t = setTimeout(function(){ currentTime() }, 1000);

    document.getElementById("hours").innerText = hh;
    document.getElementById("mins").innerText = mm;
    document.getElementById("secs").innerText = ss;
    document.getElementById("am_pm").innerText = session;
  }
currentTime();

  
  // Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this
  // button page content should be changed to "Welcome to Elevation academy"
  //ANS
  document.getElementById("btn").addEventListener("click", () => {
    document.querySelector("h2").innerText = "Welcome to Elevation academy";
  });
  
  // Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on
  //  this button hide the "Hello World" text
  //ANS
  document.getElementById("btn2").addEventListener("click", () => {
    document.querySelector("h2").innerText = "";
  });
  

  // Given an array of 0's and 1's find out number of 0's
  //ANS
  let array = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0];
  
  let array2 = array.filter((x) => x == 0);
  console.log(array2.length);
  
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      count++;
    }
  }
  console.log(count);
  
  
  // Given an array find out total no. of odd and even nos.
  //ANS
  let arr = [12, 13, 5, 7, 11, 1, 4, 17, 20, 34, 45, 51];
  let arr2 = arr.filter((x) => x % 2 === 0);
  console.log("Count of even number in Array : ", arr2.length);
  console.log("Count of odd number in Array : ", arr.length - arr2.length);
  

  // Given a string find out number of vowels
  //ANS
  let str = "jhsdgwjhdbfcaeriuoatroeakbndqwbdnmndkjqw";
  function vowelCount(str) {
    let count = 0;
    let vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i++) {
      if (vowel.includes(str[i])) {
        count++;
      }
    }
    console.log(count);
  }
  vowelCount(str);
  

  // Write a code to create two objects with 2 properties each, one will be string and other will be an array.
  // Create a function to check if all the elements of the arrays in both the objects are same
  //ANS
  let obj1 = {
    fName: "shivang",
    hobbies: ["coding", "cricket", "wwe"],
  };
  let obj2 = {
    lName: "singh",
    hobbies: ["coding", "cricket", "wwe"],
  };
  function checkObj(obj1, obj2) {
    let count = 0;
    for (let i = 0; i < obj1.hobbies.length; i++) {
      if (obj1.hobbies.includes(obj2.hobbies[i])) {
        count++;
      } else {
        console.log("hobbies are not same");
      }
    }
    if (count == obj1.hobbies.length) {
      console.log("All the elements are same");
    }
  }
  checkObj(obj1, obj2);
  
  let obj11 = {};
  let obj22 = {};
  console.log(obj11 == obj22); //false