

//..........................Location..........................................
function GetCurrentLocation() {
    if(window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            document.write(`my current latitude <h1>${position.coords.latitude}</h1>
            my current longitude <h1>${position.coords.longitude}</h1>`);
        });
    }else {
        console.log("geolocation is not supported by browser");
    }
}
GetCurrentLocation();




//..............................CAMERA CODE..........................................

window.navigator.getUserMedia=window.navigator.getUserMedia || window.navigator.webkitGetUserMedia;
if(window.navigator.getUserMedia) {
    window.navigator.getUserMedia(
        {audio:true , video:{height:600,width:800}},
        stream =>{
            let video = document.querySelector("video");
            video.srcObject=stream;
            video.onloadedmetadata=function() {
                video.play();
            };
        },
        err => {
            console.log(err.name);
        }
    );
}else {
    console.log("user meaia iss not supported by browser");
}

//.........................screen object...............................
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.colorDepth);
console.log(window.screen.pixelDepth);
console.log(window.screen.availWidth);
console.log(window.screen.availHeight);
console.log(window.screen);
if(window.screen.width <1024) {
    console.log("low res...");
} else {
    console.log("normal res...");
}





//.....................................................login page using DOM.............................
let form = document.createElement('form');
form.action = "#";
form.method = "GET";

let divForUsername = document.createElement("div");
let divForPassword = document.createElement("div");
let divForButton = document.createElement("div");

form.appendChild(divForUsername);
form.appendChild(divForPassword);
form.appendChild(divForButton);

// console.log(form);
let labelForUsername = document.createElement('label');
let labelForPassword = document.createElement('label');

labelForUsername.htmlFor = "username";
labelForPassword.htmlFor = "password";

let inputForUsername = document.createElement('input');
let inputForPassword = document.createElement('input');

inputForUsername.type = "text";
inputForUsername.id = "username";
inputForUsername.placeholder ="enter username";
inputForUsername.name ="username";

inputForPassword.type = "password";
inputForPassword.id = "password";
inputForPassword.name ="password";
inputForPassword.placeholder ="enter password";

let button = document.createElement('button');
button.textContent ="login";

divForUsername.appendChild(labelForUsername);
divForUsername.appendChild(inputForUsername);

divForPassword.appendChild(labelForPassword);
divForPassword.appendChild(inputForPassword);

divForButton.appendChild(button);

console.log(form);

document.body.appendChild(form);







//..................DROPDOWN....................
let list = document.querySelectorAll("ul li");
// console.log(list);
list.forEach(li => {
    li.addEventListener("click",e => {
       
        e.preventDefault();
        listData = e.target.parentNode.children[1];
        // console.log(listData);
        if(listData === undefined) {
            console.log("no dropdown");
        } else {
            listData.classList.toggle("active");
            console.log(listData);
        }
    });
});






// //.......................speech recognition................
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
let p = document.createElement("p");
let template = document.querySelector("#template");
template.appendChild(p);

recognition.addEventListener("result",e => {
    // console.log(e.results[0][0].transcript);
    let transcript = e.results[0][0].transcript;
    p.innerHTML = transcript;
    if(e.results[0] = transcript) {
        p = document.createElement("p");
        template.appendChild(p);
    }
});
recognition.addEventListener("end",recognition.start)
recognition.start();


//submit event and form validation
let username = document.getElementById("username");
let password = document.getElementById("password");
let template = document.getElementById("template");
let form = document.getElementById("form");

form.addEventListener("submit",e => {
    e.preventDefault();
    console.log(username.value);
    console.log(password.value);
});


//............................FORM VALIDATION........................
let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let errorMessages = document.getElementById("errorMessages");

//form submit
form.addEventListener("submit" , e => {
    e.preventDefault();
    let message = [];

    //check username is empty
    if(username.value === "" || username.value === null) {
        message.push("<p>Username is Required</p>");
        username.style.border = "1px solid red";
    }

    if(password.value === "" || password.value === null) {
        message.push("<p>Password is Required</p>");
        password.style.border = "1px solid red";
    }

    //check password minimum 6 characters
    if(password.value.length < 6) {
        message.push("<p>Password should be minimum 6 chracters</p>");
        password.style.border = "1px solid red";
    } 

    //check array > 0
    if(message.length > 0) {
        errorMessages.innerHTML = message.join(" ");
    } else {
        console.log("username " + username.value, "password " + password.value);

    }
});









       

































