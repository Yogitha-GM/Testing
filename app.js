// /*function child() {
//     console.log('iam child please execute me');
// }                                                                     
// function java() {
//     console.log('iam java backend language');
// }                                  
// function javascript() {
//     console.log('iam javascript frontend and backend language');
// }
// function parent (callback) {
//     return callback();
// }
// console.log(parent(javascript));
// console.log(parent(java));
// console.log(parent(child));


// function carObject(carname) {
//     return carname();
// }

//  carObject(function ()  {
//     console.log("iam BMW car");
// });

// let add = (a,b) => a + b;
// let multiply = (a,b) => a * b;
// let sub = (a,b) => a - b;
// let div = (a,b) => a / b;
// let mod = (a,b) => a % b;

// function calculation(num1,num2,callback) {
//     return callback(num1,num2);
// }
// console.log(calculation(10,20,add));

// console.log(calculation(10,20,multiply));
// console.log(calculation(10,20,sub));
// console.log(calculation(10,20,div));
// console.log(calculation(10,20,mod));



// var outerText = "iam outerText like iam global variable";
// function OuterBlock() {
//     var InnerText = "iam InnerText within OuterBlock";

//     function InnerBlock() {
//         var x = "iam x only available inside InnerBlock";
//         console.log(outerText);
//         console.log(InnerText);
//         console.log(x);
//     }
//     InnerBlock();
// }
// OuterBlock();


// function Employee(emp_id,emp_name,emp_salary,emp_designation,emp_city,emp_education){
//     this.emp_id = emp_id;
//     this.emp_name = emp_name;
//     this.emp_salary = emp_salary;
//     this.emp_designation = emp_designation;
//     this.emp_city = emp_city;
//     this.emp_education = emp_education;
// }
// //base constructor function
// let User = new Employee('jsp1','yogitha',30000,'frontend developer','Banglore','BE');
// let User1 = new Employee('jsp2','vikas raj',40000,'Software engineer','Banglore','BE');
// console.log(User);
// console.log(User1);



// let languages = ["javascript","java","html","css","react js","express js","node js","mangoDB","firebase","bootstrap"];//Array literal
// console.log(languages.length);//length of values
// console.log(typeof languages);//object

// let str = "java,javascript,html,css,react js,express js,node js,mangoDB,firebase,bootstrap";
// console.log(str.length);//length of charecters
// console.log(typeof str);//string

// let languages = ["js","java","python","php","c#"];
// let value1 = languages[0];
// let value2 = languages[1];
// let value3 = languages[2];
// let value4 = languages[3];
// let value5 = languages[4];

// console.log(value1);
// console.log(value2);
// console.log(value3);
// console.log(value4);
// console.log(value5);



// let ValentineWeek = "Day 10";
// switch(ValentineWeek) {
//     case "Day 07":
//         console.log("Rose Day");
//         break;
//     case "Day 08":
//         console.log("Propose Day");
//         break;
//     case "Day 09":
//         console.log("Chocolate Day");
//         break;
//     case "Day 10":
//         console.log("Teddy Day");
//         break; 
//     case "Day 11":
//         console.log("Promise Day");
//         break; 
//     case "Day 12":
//         console.log("Hug Day");
//         break; 
//     case "Day 13":
//         console.log("Kiss Day");
//         break; 
//     case "Day 14":
//         console.log("Valentine Day");
//         break; 
//         default:
//             console.log("please enter the day in valentine week")
// }





// //write a program to print 1 to 10
// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }
 





// //print the values from 10 to 1    
// for(let i=10;i>=1;i--) 
// {
//     console.log(i);
// }






// //program to check whether the given number is even or odd
// let num = 2 or 3;
// if(num%2===0)
// {
//     console.log("given number is even no");
// }
// else
// {
//     console.log("given number is odd no");
// }






// //program to print message as even no
// let i = 24;
// if(i%2===0)
// {
//     console.log(i+ ":is even number");
// }





// //print all the even numbers from 1 to 10
// for(let i=1;i<=10;i++)
// if(i%2===0)
// {
//     console.log(i);
// }






// //print all the even numbers from 10 to 1
// for(let i=10;i>=1;i--)
// if(i%2===0)
// {
//     console.log(i);
// }*/





// /*  write a program to check whether a given number even or odd if it is even number 
// print the number is followed by is even number if it is odd print the odd number followed by is odd number  */
// /*let num = 24 or 25; 
// if(num%2===0)
// {
//     console.log(num+ ":is even number");
// }
// else
// {
//     console.log(num+ ":is odd number");
// }



// //display all the even and odd numbers from 1 to 10 with a number followed by appropriate message
// for(let i=1;i<=10;i++)
// {
//     if(i%2===0)
//     {
//         console.log(i+ ":is even number");
//     }
//     else
//     {
//         console.log(i+ ":is odd number");
//     }
// }




// //iterator object
// //for of loop
// let array = ["js","java","python","php","node js","react js"];
// for(let x of array) {
//     console.log(x);
// }

// //argument object
// let args = function() {
//     for(let i of arguments) {
//         console.log(i);
//     }
// };
// args("yoga","vikki","appu","chitti");


// let array = ["js","java","python","php","node js","react js"];
// //array helper methods
// //array.prototype.foreach()
// //syntax
// ////array.prototype.foreach(callbackfun)
// array.forEach(function(value,index,array){
//     console.log(array);
//     console.log(`${index} ${value}`);
// })

// let array = ["js","java","python","php","node js","react js"];
// //array helper methods
// //for loop
// for(let i=0;i<=array.length;i++){
//     console.log(array[i]);
// }

// //for of iterator 
// //for of loop
// for(let i of array){
//     console.log(i);
// }

// //array helper method forEach loop
// array.forEach((value,index,array) => console.log(value));



// //array helper method map method
// //array.prototype.map(callbackfun)
// let array = ["js","java","python","php","node js","react js"];
// array.map((value,index,array) => console.log(value));


// let array=[10,40,200,100,3,4,103];
// var x=array.forEach(function(value){
//     return value*2;
// })
// console.log(x);

// var y = array.map(function(value){
//     return value*2;
// });
// console.log(y);
// console.log(array);


// //push at the last index in an array
// var users=["yoga","vikki","appu"];
// console.log(users);
// users.push("chitti");
// console.log(users);


// //unshift method
// var users=["yoga","vikki","appu"];
// console.log(users);
// users.unshift("chitti");
// console.log(users);


// //pop() method
// var users=["yoga","vikki","appu"];
// users.pop();

// console.log(users);

// //shift() method
// var users=["yoga","vikki","appu"];
// users.shift();

// console.log(users);




// //splice method
// let users=["yoga","vikki","appu","chitti"];
// let deletedvalue = users.splice(1,1);
// console.log(users);
// console.log(deletedvalue);


// //indexof method
// let users=["yoga","vikki","chitti","appu"];
// console.log(users.indexOf("chitti"));
// console.log(users.indexOf("yoga"));



// //lastIndexOf method
// let users=["yoga","vikki","chitti","chitti","appu","rajath"];
// console.log(users.indexOf("chitti"));
// console.log(users.lastIndexOf("chitti"));



// //filter method
// let ages = [10,40,50,20,60,70,100,3,6];
// let filterNew=ages.filter(value => value<10);
// console.log(ages);

// console.log(filterNew);*/



// let ages = [10,40,50,20,60,70,100,3,6];
// let filteredages=ages.filter(value => {
//     if(value>30) {
//         return value;
//     }
// });
// console.log(ages);

// console.log(filteredages);




// //reduce method
// let num = [10,20,30,40,50];
// let total = num.reduce(function(accumulator,currentValue) {
//     // console.log(accumulator);
//     // console.log(currentValue);
//     return accumulator + currentValue;
// });
// console.log(total);


// let reduceData = ["y","o","g","a"];
// let result = reduceData.reduce((accumulator,currentValue) => accumulator + currentValue);
// console.log(result);


// let array = ["a","g","o","y"];
// let result = array.reduceRight((accumulator,currentValue) => accumulator + currentValue);
// console.log(result);


//2D array
// let array = [
//     [1,1],
//     ["yoga","vikki","appu","chitti"],
//     [2,2],
//     [3,3],
//     [4,4],
// ];
// console.log(array[0][0]);
// console.log(array[2][1]);
// console.log(array[3][1]);
// console.log(array[4][1]);
// array[1].forEach(x => console.log(x));


// let array = [
//     [1,1],
//     [2,2],
//     [3,3],
//     [4,4],
//     [5,5],
// ];
// let output = array.reduce((accumulator,currentValue) => {
//     console.log (currentValue);
//     return accumulator.concat(currentValue);
// } );
// console.log(output);

// let result= output.reduce(
//     (accumulator,currentValue) => accumulator + currentValue
// );
// console.log(result);


 //flat method                                                      
// let array= [
//     [1,1,1],
//     [1,1,1],
//     [1,1,1],
//     [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[1,1,1]
//     ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//     console.log(array);


//     let result=array.flat(Infinity);
//     console.log(result);

    
//     let output = [...result].reduce(
//         (accumulator,currentValue) => accumulator + currentValue
//     );
//     console.log(output);
    


//find method
// let num = [10,20,30,40,50,60,70];
// let find = num.find((value) => value > 40);
// console.log(find);


// //fill method
// let array= Array(10);
// let array1= new Array(1000);
// let array2=Array.of(1000);
// console.log(array);
// console.log(array1);
// console.log(array2);

// let values = array.fill("😃");
// console.log(values);
// let value1 = array1.fill("😆");
// console.log(value1);
// let value2 = array2.fill("😋");
// console.log(value2);



//entries() method
// let array = ["js","java","nodejs","react","spring"];
// for(let x of array.entries()) {
//     console.log(x);
// }


//every() method
// let ages = [20,40,50,90,78];
// let isAdult = ages.every(age => age >= 21);
// console.log(isAdult);
// if(isAdult) {
//     console.log("all are eligible to vote");
// } else {
//     console.log("something went to wrong");
// }



//some method
// let numbers = [1,2,3,4,5,6,7];
// let check = numbers.some(value => value > 7);
// console.log(check);


//includes() method
// let users = ["yoga","appu","vikki"];
// if(users.includes("chitti ")) {
//     console.log("yoga is present");
// } else {
//     console.log("yoga is not present");
// }


//slice() method
// let array = ["yoga","appu","vikki","chitti"];
// let sliceIt = array.slice(1,2);
// console.log(sliceIt);


//keys() method
// let array = ["yoga","appu","vikki","chitti"];
// for (let key of array.keys()) {
//     console.log(key);
// }


//value() method
// let array = ["yoga","appu","vikki","chitti"];
// for (let value of array.values()) {
//     console.log(value);
// }




// //object
// let x = {
//     username : "yoga",
//     age : 23,
//     company : "ABB",
//     salary : 20000,
//     designation : "javascript developer"

// }
// console.log(x);
// let username = x.username;
// let age = x.age;
// let company = x.company;
// let salary = x.salary;
// let designation = x.designation;
// console.log(`my name is ${username} my age is ${age} i work for ${company} iam getting ${salary} my designation is ${designation}`);



//object literal way
// let object = {};
// object.name = "yoga";
// object.age = 23;
// object.company = "tcs";
// object.salary = 20000;
// object.designation = "nodejs developer";
// console.log(object);



//constructor way can create objects
// let users = new Object();
// users.name = "vikki";
// users.age = 20;
// users.company = "infosys";
// users.salary = 30000;
// users.designation = "software developer";
// console.log(users);




//function constructor way
// let Users = function(name,age,company,salary,designation) {
//     console.log(this);
//     this.name = name;
//     this.age = age;
//     this.company = company;
//     this.salary = salary;
//     this.designation = designation;

// };
// let yoga = new Users("yoga",23,"tcs",20000,"reactjs developer");
// let rajini = new Users("Rajini",30,"ABB",100000,"software engineer");
// console.log(yoga);
// console.log(rajini);
// new Object();



//object .assign method
// let username = { username: "yoga"};
// let password = { password: "yoga@999"};
// let combineObject = Object.assign(username,password);
// console.log(combineObject);



// let username = { username: "yoga" , username:"vikki" , password:"vikki@123"};
//  let password = { password: "yoga@999"};
//  let combineObject = Object.assign(username,password);
//  console.log(combineObject);


//how to loop object=> use for in loop
// let users = {
//     username: "yoga",
//     age: 23,
//     company:"tcs",
//     salary:20000,
//     designation: "js developer",
// };
// //for i loop for object
// for(let i in users) {
//     console.log(`${i} => ${users[i]}`);
// }


//store multiple object
// let employees = [
//     {
//         emp_id:"Typ1",
//         emp_photo:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fthumb%2Fmsid-17993761%2Cwidth-800%2Cheight-600%2Cresizemode-75%2Cimgsize-14314%2Cpt-32%2Cy_pad-40%2F17993761.jpg&imgrefurl=https%3A%2F%2Ftimesofindia.indiatimes.com%2Fentertainment%2Fkannada%2Fmovies%2Fnews%2Fthere-can-be-only-one-rajkumar-puneeth-rajkumar%2Farticleshow%2F17993761.cms&tbnid=XFKBA9jPX8dbWM&vet=12ahUKEwj_qKeLi6rvAhVEm0sFHXypDmYQMygAegUIARC_AQ..i&docid=OPujvPWhdVkavM&w=800&h=599&q=puneeth%20images&ved=2ahUKEwj_qKeLi6rvAhVEm0sFHXypDmYQMygAegUIARC_AQ",
//         emp_name:"puneeth",
//         emp_salary:2000,
//         emp_education:"BE",
//         emp_designation:"nodejs developer",
//         emp_city:"banglore",
//     },
//     {
//         emp_id:"Typ2",
//         emp_photo:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.karnataka.com%2Fwp-content%2Fuploads%2F2011%2F09%2Fdr-rajkumar.jpg&imgrefurl=https%3A%2F%2Fwww.karnataka.com%2Fpersonalities%2Frajkumar-kannada-actor%2F&tbnid=7D1XzJRYd3pZ0M&vet=12ahUKEwiP3P7BhqrvAhUVWXwKHQcoA4kQMygAegUIARCrAQ..i&docid=c-6YJmdw9yR6nM&w=708&h=531&q=rajkumar%20kannada%20actor%20image&hl=en-GB&ved=2ahUKEwiP3P7BhqrvAhUVWXwKHQcoA4kQMygAegUIARCrAQ",
//         emp_name:"rajkumar",
//         emp_salary:20000,
//         emp_education:"BTECH",
//         emp_designation:"software developer",
//         emp_city:"mandya",
//     },
//     {
//         emp_id:"Typ3",
//         emp_photo:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oneindia.com%2Fpoliticians%2Fimage%2F302x100x402x2%2Fdivya-spandana-ramya-33805.jpg&imgrefurl=https%3A%2F%2Fwww.oneindia.com%2Fpoliticians%2Fdivya-spandana-ramya-33805.html&tbnid=mtbqxv5VV1_YGM&vet=12ahUKEwjh19_mhqrvAhV62HMBHXC-BgkQMygBegUIARDCAQ..i&docid=tLczX17SvRhlIM&w=302&h=402&q=ramya%20image&hl=en-GB&ved=2ahUKEwjh19_mhqrvAhV62HMBHXC-BgkQMygBegUIARDCAQ",
//         emp_name:"ramya",
//         emp_salary:200000,
//         emp_education:"BE",
//         emp_designation:"software engineer",
//         emp_city:"mysore",
//     }
// ];

// let output="";
// for(let emp of employees){
//     output += `
//     <section>
//     <article>
//     <div>
//     <img src=${emp.emp_photo} alt=${emp.emp_name}/>
//     <h2>name:${emp.emp_name}</h2>
//     <p>Id:${emp.emp_id}</p>
//     <p>salary:${emp.emp_salary}</p>
//     <p>salary:${emp.emp_salary}</p>
//     <p>designation:${emp.emp_designation}</p>
//     <p>education:${emp.emp_education}</p>
//     <p>city:${emp.emp_city}</p>
//     </div>
//     </article>
//     </section>
//     `;
// }
// console.log(output);
// document.write(output);



//using variable inside object
// var username = "yoga";
// var age = 22;
// var company = "jspiders";
// var salary = 15000;

// let obj ={
//     username,
//     age,
//     company,
//     salary,
//     designation:"js developer"
// };
// let obj1 ={
//     username : username,
//     age : age,
//     company : company,
//     salary : salary,
// };
// console.log(obj);
// console.log(obj1);


//In object literals we can use js reserved keyword
// let obj = {
//     for : "vikki",
//     if : "if",
//     while : "while",
//     switch : "switch",
// };
// console.log(obj);



// let User = {
//     'user-name' :"yoga"
// }
// let CreateServer = {
//     "content-Type" : 'Application/json'
// }
// console.log(User);
// console.log(CreateServer);



//how to combine 2 objects
// let obj1 = {name:"yoga"};
// let obj2 = {age:22};
// let combine = Object.assign(obj1,obj2);
// let combineWithSpread={...obj1,...obj2};
// console.log(combine);
// console.log(combineWithSpread);


// const Users = {
//     username : "yoga"
// }
// Users.username="vikki";
// console.log(Users);


//how to prevent object properties

// let users={
//     username:"yoga",
//     age:22,
//     company:"tcs",
//     salary:20000
// };
// Object.freeze(users);
// users.username="vikki";
// users.age=20;
// users.company="infosys";
// users.salary=200000;
// console.log(users);


//object.keys and object.values
// let users = {
//     username:"yoga",
//     company:"jsp",
//     designation:"Html developer",
// };
// for (let i in users) {
//     console.log(i);
//     console.log(users[i]);
// }
// let keys=Object.keys(users);
// let values = Object.values(users);
// console.log(keys);
// console.log(values);
// values.forEach(x=> console.log(x));


//object.entries
// let users={
//     username:"anu",
//     company:"jsp",
//     designation:"js developer",
// };
// let result = Object.entries(users);
//     console.log(result);
//     console.log(Array.isArray(result));


//call apply bind
// let user ={
//     username:'yoga',
//     company:"tcs",
//     userDetails:function() {
//         console.log(this);
//     }
// }
// console.log(user.userDetails());




// let user1 = {
//     username:"yoga",
//     company:"tcs",
//     userDetails:function() {
//         console.log(`my name is ${this.username} and i work for ${this.company}`);
//     },
// };
// let user2 = {
//     username:"vikki",
//     company:"infosys",
// };
// let user3 = {
//     username:"rajini",
//     company:"ABB",
// };
// console.log(user1.userDetails());
// console.log(user1.userDetails.call(user2));
// console.log(user1.userDetails.call(user3));



// let employee1 ={
//     firstName:"yoga",
//     lastName:"gowda",
// };
// let employee2 ={
//     firstName:"vicky",
//     lastName:"gowda",
// };
// let employee3 ={
//     firstName:"rajath",
//     lastName:"gowda",
// };
// function GetFullName() {
//     return this.firstName + this.lastName;
// }

// console.log(GetFullName.call(employee1));
// console.log(GetFullName.call(employee2));
// console.log(GetFullName.call(employee3));



// let employee1 ={
//     firstName:"yoga",
//     lastName:"gowda",
// };
// let employee2 ={
//     firstName:"vicky",
//     lastName:"gowda",
// };
// let employee3 ={
//     firstName:"rajath",
//     lastName:"gowda",
// };
// function GetFullName(salary,designation) {
//     return this.firstName + this.lastName +" " + salary + " " + designation;
// }

// console.log(GetFullName.call(employee1,20000,"web developer"));
// console.log(GetFullName.call(employee2,30000,"js developer"));
// console.log(GetFullName.call(employee3,40000,"html developer"));

// console.log(GetFullName.call(employee3,[40000,"html developer"]));



// let course ={
//     course_name:"java",
//     duration:"4months",
// };
// let mernstack ={
//     course_name:"js",
//     duration:"4months",
// };
// function getCourse(trainer,...skills) {
//     return `course name ${this.course_name} duration ${this.duration} trainer name is ${trainer} skills are ${skills}`;
// }
// let java = getCourse.call(course,["madhu","java,sql,j2ee,spring,hibernate"]);
// let js = getCourse.call(mernstack,["shashi","js,html,css,ecmascript,react,nodejs,expressjs"]);
// console.log(java);
// console.log(js);


//call() method
// let numbers={ num1 : 100};
// function calculate(num2,num3) {
//     return this.num1 + num2 + num3;
// }
// let resultWithCall = calculate.call(numbers,10,30);
// let resultWithApply = calculate.apply(numbers,[10,30]);
// let resultWithBind = calculate.bind(numbers,10,30);
// console.log(resultWithCall);
// console.log(resultWithApply);
// console.log(resultWithBind);





//BOM
// console.log(window.document);
// console.log(window.navigator);
// console.log(window.screen);
// console.log(window.history);
// console.log(window.location);


// function GetCurrentLocation() {
//     if(window.navigator.geolocation) {
//         window.navigator.geolocation.getCurrentPosition(function(position){
//             console.log(position);
//             document.write(`my current latitude <h1>${position.coords.latitude}</h1>
//             my current longitude <h1>${position.coords.longitude}</h1>`);
//         });
//     }else {
//         console.log("geolocation is not supported by browser");
//     }
// }
// GetCurrentLocation();


// console.log(window.navigator.onLine);
// if(window.navigator.onLine === true) {
//     document.write(`hey iam online please chat with me <h1 style="color:green">ONLINE</h1>`);
// } else {
//     document.write(`ayoo iam <h1 style="color:red">offline</h1>please try later`);
// }

//..............................CAMERA CODE..........................................

// window.navigator.getUserMedia=window.navigator.getUserMedia || window.navigator.webkitGetUserMedia;
// if(window.navigator.getUserMedia) {
//     window.navigator.getUserMedia(
//         {audio:true , video:{height:600,width:800}},
//         stream =>{
//             let video = document.querySelector("video");
//             video.srcObject=stream;
//             video.onloadedmetadata=function() {
//                 video.play();
//             };
//         },
//         err => {
//             console.log(err.name);
//         }
//     );
// }else {
//     console.log("user meaia iss not supported by browser");
// }

//screen object
// console.log(window.screen.width);
// console.log(window.screen.height);
// console.log(window.screen.colorDepth);
// console.log(window.screen.pixelDepth);
// console.log(window.screen.availWidth);
// console.log(window.screen.availHeight);
// console.log(window.screen);
// if(window.screen.width <1024) {
//     console.log("low res...");
// } else {
//     console.log("normal res...");
// }


// console.log(window.history);
// console.log(window.history.back());
// console.log(window.history.forward());
// window.history.back();
// window.history.forward();
// window.history.length=1;


// console.log(window.location.href);
// console.log(window.location.protocol);
// console.log(window.location.hostname);
// console.log(window.location.host);
// console.log(window.location.port);
// console.log(window.location.hash);
// console.log(window.location.origin);

// console.log(window.location.pathname);
// console.log(window.location.assign("http://www.qspider.com"));


//getElementById()
//document.getElementById();
// let demo = document.getElementById("demo");
// let template = document.getElementById("template");
// console.log(demo);
// console.log(template);


//getElementByClassName()
// let block = document.getElementsByClassName("block");
// // console.log(block);
// console.log(block[1]);
// for(let b of block) {
//     console.log(b);
// }


//getElementByTagName()
// let block = document.getElementsByTagName("div");
// console.log(block);

// for(let div of block) {
//     console.log(div);
// }


// document.querySelector()
// let demo = document.querySelector("#demo");
// let demo1 = document.querySelector("demo");
// console.log(demo);
// console.log(demo1);


// document.querySelectorAll()
// let block1=document.getElementsByTagName("div");
// [...block1].forEach(x => console.log(x));
// let block2 = document.querySelectorAll("div");
// block2.forEach(x=>console.log(x));
// console.log(block1);
// console.log(block2);


// let hello = document.querySelector("#demo .block div");
// console.log(hello);


//to insert text
// let demo = document.getElementById("demo");
// demo.textContent="we are learning dom";
// demo.innerHTML="<h1>we are learning js with dom</h1>";
// demo.style.background="crimson";
// demo.style.color="white";
// demo.style.textTransform="uppercase";
// demo.style.transform=scale(2);



//getAttribute() and setAttribute()
// let demo = document.getElementById("demo");
// demo.innerHTML="<h1>Hello</h1>";
// demo.setAttribute("class","jspiders");
// demo.setAttribute("title","we are adding attributes...");
// demo.setAttribute("disabled" , true);
// console.log(demo);
// let id = demo.getAttribute("id");
// let cssClass = demo.getAttribute("class");
// console.log(id);
// console.log(cssClass);



// let demo= document.getElementById("demo");
// demo.localName="hello";
// demo.title="hello iam title";
// demo.setAttribute("data-type","javascript");
// console.log(demo);


//how to add css class
// let demo=document.getElementById("demo");
// demo.classList.add("jspider","qspiders","pyspiders");
// console.log(demo);
// demo.classList.remove("pyspiders");
// console.log(demo);
// demo.classList.toggle("qspiders");
// console.log(demo);


// console.dir(document);
// console.log(document.links) 
//     for(let a of document.links){
//     console.log(a);
//     a.style.background="blue";
//     a.style.color="white";
//     a.style.display="block";
//     a.style.padding="10px";
//     a.style.textDecoration="none";
//     a.style.margin="10px";
//}


//how to create an element in DOM
// let div = document.createElement("div");
// let form = document.createElement("form");
// let demo = document.getElementById("demo");
// div .textContent ="Iam div";
// form.textContent = "Iam form";
// console.log(div);
// console.log(form);
// demo.append(form);
// demo.prepend(div);


//login page using DOM
// let form = document.createElement('form');
// form.action = "#";
// form.method = "GET";

// let divForUsername = document.createElement("div");
// let divForPassword = document.createElement("div");
// let divForButton = document.createElement("div");

// form.appendChild(divForUsername);
// form.appendChild(divForPassword);
// form.appendChild(divForButton);

// // console.log(form);
// let labelForUsername = document.createElement('label');
// let labelForPassword = document.createElement('label');

// labelForUsername.htmlFor = "username";
// labelForPassword.htmlFor = "password";

// let inputForUsername = document.createElement('input');
// let inputForPassword = document.createElement('input');

// inputForUsername.type = "text";
// inputForUsername.id = "username";
// inputForUsername.placeholder ="enter username";
// inputForUsername.name ="username";

// inputForPassword.type = "password";
// inputForPassword.id = "password";
// inputForPassword.name ="password";
// inputForPassword.placeholder ="enter password";

// let button = document.createElement('button');
// button.textContent ="login";

// divForUsername.appendChild(labelForUsername);
// divForUsername.appendChild(inputForUsername);

// divForPassword.appendChild(labelForPassword);
// divForPassword.appendChild(inputForPassword);

// divForButton.appendChild(button);

// console.log(form);

// document.body.appendChild(form);


//.................................Dynamically tagname.......................
// let links = document.getElementsByTagName("a");
// for(let i=0;i<links.length;i++){
//     links[i].className=" links link-" + i;
//     console.log(links);
// }


//DOM events
// let btn = document.getElementById("btn");
// btn.onclick = function () {
//     console.log("button clicked");
// };
// btn.onmouseenter = function() {
//     console.log("mouse entered");
//     document.body.style.background="skyblue";
// };
// btn.onmouseleave = function() {
//     console.log("mouse leaved");
//     document.body.style.background="grey";
// };


//mouse events
// let btn = document.getElementById("btn");
// btn.ondblclick = function(e) {
//     console.log(`type of event ${e.type}`);
//     console.log(e);
// };
// btn.onclick = function(event) {
//     console.log(`type of event ${event.type}`);
//     console.log(event);
// }


// let btn = document.getElementById("btn");
// //dom built in method
// btn.onclick = function() {
//     console.log("hello");
// };
// //dom built in method
// btn.addEventListener("click",() => {
//     console.log("hello");
// });

// let btn = document.getElementById("btn");
// btn.addEventListener("click",() => {
//     document.body.style.background = "grey";
// });


// let btn = document.getElementById("btn");
// btn.addEventListener("click",() => {
//     document.body.classList.toggle("active");
// });




//..................DROPDOWN....................
// let list = document.querySelectorAll("ul li");
// // console.log(list);
// list.forEach(li => {
//     li.addEventListener("click",e => {
       
//         e.preventDefault();
//         listData = e.target.parentNode.children[1];
//         // console.log(listData);
//         if(listData === undefined) {
//             console.log("no dropdown");
//         } else {
//             listData.classList.toggle("active");
//             console.log(listData);
//         }
//     });
// });

// let nav = document.getElementById("nav");
// let btn = document.getElementById("btn");
// btn.addEventListener("click",e => {
//         nav.classList.toggle("active");
//      });


// let list = document.querySelectorAll("ul li");
// list.forEach(li => {
//     li.addEventListener("click",e => {
//         e.preventDefault();
//         console.log(e.target);
//         console.log(e.target.parentNode);
//     });
// });



//................keyboard event.............
// let input = document.getElementById("input");
// input.addEventListener("keyup",e => {
//     if(e.keyCode === 13) {
//         console.log(e.target.value);
//         }
//     });

// // //...............Textarea........................
// let text1 = document.getElementById("text1");
// let text2 = document.getElementById("text2");
// text1.addEventListener("keyup",e => {
//     text2.innerHTML = e.target.value;
//     if(e.target.value.length > 10) {
//         text2.style.color = "green";
//         text2.style.textTransform = "uppercase";
//     } else if (e.target.value.length < 10) {
//         text2.style.color = "red";
//     }
// });


// //.......................speech recognition................
// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = new SpeechRecognition();
// let p = document.createElement("p");
// let template = document.querySelector("#template");
// template.appendChild(p);

// recognition.addEventListener("result",e => {
//     // console.log(e.results[0][0].transcript);
//     let transcript = e.results[0][0].transcript;
//     p.innerHTML = transcript;
//     if(e.results[0] = transcript) {
//         p = document.createElement("p");
//         template.appendChild(p);
//     }
// });
// recognition.addEventListener("end",recognition.start)
// recognition.start();


//submit event and form validation
// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let template = document.getElementById("template");
// let form = document.getElementById("form");

// form.addEventListener("submit",e => {
//     e.preventDefault();
//     console.log(username.value);
//     console.log(password.value);
// });


//............................FORM VALIDATION........................
// let form = document.getElementById("form");
// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let errorMessages = document.getElementById("errorMessages");

// //form submit
// form.addEventListener("submit" , e => {
//     e.preventDefault();
//     let message = [];

//     //check username is empty
//     if(username.value === "" || username.value === null) {
//         message.push("<p>Username is Required</p>");
//         username.style.border = "1px solid red";
//     }

//     if(password.value === "" || password.value === null) {
//         message.push("<p>Password is Required</p>");
//         password.style.border = "1px solid red";
//     }

//     //check password minimum 6 characters
//     if(password.value.length < 6) {
//         message.push("<p>Password should be minimum 6 chracters</p>");
//         password.style.border = "1px solid red";
//     } 

//     //check array > 0
//     if(message.length > 0) {
//         errorMessages.innerHTML = message.join(" ");
//     } else {
//         console.log("username " + username.value, "password " + password.value);

//     }
// });



//...................................EVENT BUBBLING...................................
// let grandparent = document.getElementById("grandparent");
// let parent = document.getElementById("parent");
// let child = document.getElementById("child");

// grandparent.addEventListener("click",e=> {
//     console.log("Grandparent clicked");
// },true);
// parent.addEventListener("click",e => {
//     console.log("parent clicked");
// },true);
// child.addEventListener("click",e => {
//     console.log("child clicked");
// },true);



//............................removing dom elements..............................
// let ul = document.getElementById("ul");
// ul.addEventListener("click",e => {
//     console.log(e.target);
//     e.target.remove();
// });


//................................Remove button................................
// let ul = document.getElementById("ul");
// ul.addEventListener("click",e => {
//     let span = e.target.children;
//     console.log(e.target);
//     e.target.remove();
//     console.log(span[0]);
// });


// let span = document.querySelectorAll("span");
// span.forEach(x => {
//     x.addEventListener("click",e => {
//         e.target.parentNode.remove();
//     });
// });


// let form = document.getElementById("form");
// let input = document.getElementById("input");
// let ul = document.getElementById("ul");

// form.addEventListener("submit",e => {
//     e.preventDefault();
//     ul.append(input.value);
// });


//..............................................add random data to html through js....................................................//

// let languages = [
//     "java","javascript","php","node js","react","angular","spring","react native","aws","drupal"
// ];
// let output = "";
// languages.forEach(lang => {
//     output += `<li>${lang}</li>`;

// });
// document.getElementById("ul").innerHTML = output;



// let countries = ["Afghanistan", "Albania", "Algeria", "American Samoa",
//  "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", 
//  "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", 
//  "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", 
//  "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", 
//  "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad",
//   "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo",
//    "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", 
//    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor",
//     "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)",
//      "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", 
//      "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland",
//       "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands",
//        "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)",
//         "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
//         "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", 
//         "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", 
//         "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar",
//          "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius",
//           "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat",
//            "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia",
//             "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway",
//              "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", 
//              "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", 
//              "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
//               "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", 
//               "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena",
//                "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden",
//                 "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of",
//                  "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands",
//                   "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
//                  "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu",
//                   "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)",
//  "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
// ];


// let output = "";
// countries.forEach(country => {
//     output += `<option value=${country}>${country}</option>`;

// });
// document.getElementById("country").innerHTML = output;


// let ul = document.getElementById("ul");
// ul.addEventListener("click",e => {
//     console.log(e.target);
// });  

 

//...............................PROMISE.....................
// let promise = new Promise((resolve , reject) => {
//     let isAvailable = true;
//     if(isAvailable === true) {
//         resolve("yes iam available");
//     } else {
//         reject("yes iam not available please try again");
//     }
// });
// promise.then(function(data) {
//     console.log(data);
// });
// promise.catch(function(error) {
//     console.log(error);
// });

//.............................SETTIMEOUT AND SETTIMEINTERVAL.................
// setTimeout(function() {
//     console.log("hello iam setTimeOut function");
// },10000);

// setInterval(function() {
//     let date = new Date().toLocaleTimeString();
//     document.getElementById("time").innerHTML=date;
// },1000);

// let user ="yoga";
// console.log(user);


// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("connect to uber");
//     },1000);
//     setTimeout(() => {
//         reject("unable to connect uber app");
//     },9999);
// });

// promise.then(data => console.log(data)).catch(err => console.log(err));



// let promise1 = new Promise((resolve,reject) => {
//    let isJavascriptGood = true;
//    if(isJavascriptGood) {
//        resolve("yes i love javascript");
//    } else{
//        reject("i dont like javascript");
//    }
// });
// let promise2 = new Promise((resolve,reject) => {
//     let isJavascriptGood = true;
//     if(isJavascriptGood) {
//         resolve("yes i love javascript");
//     } else{
//         reject("i dont like javascript");
//     }
//  });
//  let promise3 = new Promise((resolve,reject) => {
//     let isJavascriptGood = true;
//     if(isJavascriptGood) {
//         resolve("yes i love javascript");
//     } else{
//         reject("i dont like javascript");
//     }
//  });

//  Promise.all([promise1,promise2,promise3]).then(data => console.log(data)).catch(err => console.log(err));





// let promise1 = new Promise((resolve,reject) => {
//     let isJavascriptGood = true;
//     if(isJavascriptGood) {
//         resolve("yes i love javascript");
//     } else{
//         reject("i dont like javascript");
//     }
//  });
//  let promise2 = new Promise((resolve,reject) => {
//      let isJavascriptGood = false;
//      if(isJavascriptGood) {
//          resolve("yes i love javascript");
//      } else{
//          reject("i dont like javascript");
//      }
//   });
//   let promise3 = new Promise((resolve,reject) => {
//      let isJavascriptGood = false;
//      if(isJavascriptGood) {
//          resolve("yes i love javascript");
//      } else{
//          reject("i dont like javascript");
//      }
//   });
 
//   Promise.any([promise1,promise2,promise3]).then(data => console.log(data)).catch(err => console.log(err));



// let yoga = new Promise((resolve,reject) => {
// setTimeout(() => {
//     resolve('yoga won');
// },130);
// });
// let vicky = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('vicky won');
//     },20000); 
// });
// let appu = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('appu won');
//     },10000);  
// });

// Promise.race([yoga,vicky,appu]).then(winner => {
//     console.log(winner);
// }).catch(err => console.log(err));





// let yoga = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('yoga won');
//     },130);
//     });
//     let vicky = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('vicky won');
//         },20000); 
//     });
//     let appu = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('appu won');
//         },10000);  
//     });
    
//     Promise.allSettled([yoga,vicky,appu]).then(winner => {
//         console.log(winner);
//     }).catch(err => console.log(err));




//....................................DESTRUCTURING ASSIGNMENT....................................

// let languages = ["nodejs" ,"python","js","react","expressjs","nextjs"];
// let [nodejs ,python,...rest] = languages;
// console.log(nodejs ,python,rest.join(" "));
// let [x,y, , a,b,c] = languages;
// console.log("x ",x,"y ",y, "a ",a);

// let [nodejs ,python,js,react,expressjs,nextjs] = languages;
// console.log(nodejs ,python,js,react,expressjs,nextjs);

// let java,js;
// [java,js] = ["backend lang","frontend and backend"];
// console.log(java);
// console.log(js);


// let a,b;
// [a,b] = [1,2];
// console.log(a);
// console.log(b);


// let a,b;
// [a=10,b=30] = [20];
// console.log(a);
// console.log(b);


//...................................SWAPPING VARIABLES...............................
// let a=1;
//  let b=3;
//  [a,b] = [b,a];
//  console.log(a);
//  console.log(b);

//..............................OBJECT DESTRUCTURIG......................................
// let users = {
//     username : "yoga",age : 22,company : "ty",salary : 20000,designation : "js devloper"
// };
// let {username,age,company,salary,designation} = users;
// console.log(username,age,company,salary,designation);


//..................DATE....................................
// let date = new Date();
// let month = date.getMonth();
// let year = date.getFullYear();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let milliseconds = date.getMilliseconds();
// let hour = date.getHours();
// console.log(date);
// console.log(month);
// console.log(year);
// console.log(minutes);
// console.log(seconds);
// console.log(milliseconds);
// console.log(hour);


//......................................DIGITAL CLOCK...................................................
// function DigitalClock()
// {
//     setInterval(function()
//     {
//     let date=new Date();
//     let hour=date.getHours();
//     let minutes=date.getMinutes();
//     let seconds=date.getSeconds();
//     document.getElementById("time").innerHTML= `<h1>${hour} : ${minutes} : ${seconds} </h1>`;
//     }, 1000);
// }
// DigitalClock();

// function DigitalClock() {
//     setInterval(function() {
//         let time = new Date().toLocaleTimeString();
//         document.getElementById("time").innerHTML = time;
//     },1000);
// }
// DigitalClock();         

//...................................MATH OBJECT.................................................
//max
// console.log(Math.max(10,20,500,900));
// //min
// console.log(Math.min(10,20,500,900));
// //ceil
// console.log(Math.ceil(-1.3));
// //floor
// console.log(Math.floor(0.9));
// //trunc
// console.log(Math.trunc(8.9));
// //round
// console.log(Math.round(1.8));
//random numbers
// let btn = document.getElementById("btn");
// btn.addEventListener("click",e => {
//     let random = Math.round(Math.random() * 100 + 1);
//     document.getElementById("template").innerHTML = random;
// });



//.......................................WEB STORAGE...........................................................

// window.localStorage.setItem("language","javascript");
// window.localStorage.setItem("frontend","reactjs");
// window.localStorage.setItem("backend","nodejs");

// document.getElementById("template").innerHTML = window.localStorage.getItem("frontend");

// window.localStorage.removeItem("language");


//...........................................LOCAL STORAGE.......................................................................

// let input = document.getElementById("input");
// let form = document.getElementById("form");

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   let value = input.value;
//   let key = input.value;
//   window.localStorage.setItem(key, value);
// });

// //fetch items from local storage
// let languages = window.localStorage;

// //for display it on webpage
// let output = "";
// //loop this object
// for (let i in languages) {
//   let finalData = window.localStorage.getItem(i);
//   if (finalData === null) {
//     console.log("No data");
//   } else {
//     output += `<li>${finalData}</li>`;
//   }
// }

// //connect with template and use innerHtml
// document.getElementById("template").innerHTML = output;

// //remove item
// window.localStorage.removeItem("javascript");
// window.localStorage.removeItem("react js");

// //........................................SESSION STORAGE..................................................

// window.sessionStorage.setItem("login", "yoga");
// console.log(window.sessionStorage.getItem("login"));
// window.sessionStorage.removeItem("login");

//..........................................es6 CLASSES..................................................

// class UserWithClass {
//   constructor() {
//     console.log("I am class");
//   }
// }
// new UserWithClass();
// console.log(typeof UserWithClass);

// function UserWithFunction() {
//   console.log("Iam a Function");
// }
// UserWithFunction();
// console.log(typeof UserWithFunction);


//how to create object by using classes

// class Employee {
//   constructor(emp_id,emp_name,emp_salary,emp_designation) {
//     this.emp_id = emp_id;
//     this.emp_name = emp_name;
//     this.emp_salary = emp_salary;
//     this.emp_designation = emp_designation; 
//   }
// }

// let yoga = new Employee("typ1","yoga",20000,"js developer");
// let vikki = new Employee("typ2","vikas",30000,"software developer");
// console.log(yoga);
// console.log(vikki);


//how to create a method inside a class

// class Employee {
//   constructor(emp_id,emp_name,emp_salary,emp_designation) {
//     this.emp_id = emp_id;
//     this.emp_name = emp_name;
//     this.emp_salary = emp_salary;
//     this.emp_designation = emp_designation; 
//   }
//   getDetails() {
//     console.log(`my name is ${this.emp_name}`);
//   }
// }

// let yoga = new Employee("typ1","yoga",20000,"js developer");
// let vikki = new Employee("typ2","vikas",30000,"software developer");
// yoga.getDetails();
// vikki.getDetails();


//................................STATIC METHOD............................

// class Employee {
//   constructor(emp_id,emp_name,emp_salary,emp_designation) {
//     this.emp_id = emp_id;
//     this.emp_name = emp_name;
//     this.emp_salary = emp_salary;
//     this.emp_designation = emp_designation; 
//   }
//   static username = "iam yoga";
//   static details() {
//     console.log("iam details block");
//   }
//   getDetails() {
//     console.log(`my name is ${this.emp_name}`);
//   }
// }

// let yoga = new Employee("typ1","yoga",20000,"js developer");
// let vikki = new Employee("typ2","vikas",30000,"software developer");
// yoga.getDetails();
// vikki.getDetails();
// Employee.details();
// Employee.username;


//..............................INHERITENCE.....................................

// class UserObject {
//   constructor(username,password) {
//     this.username = username;
//     this.password = password;
//   }
// }

// class User extends UserObject {
//   constructor(username,password,profile){
//   super(username,password,profile)
//   this.profile = profile;
//   }
// }
// let yoga = new User("yoga","yoga@123","yogaprofile");
// console.log(yoga);














































































































//...............................STRING HELPER METHOD....................................
//charAt()
// let a = "yoga";
// console.log(a.charAt(2));

//charCodeAt()
// let a = "yoga";
// console.log(a.charCodeAt(2));


//slice()
// let a = "Hello world";
// console.log(a.slice(-3));


//substring()
// let a = "I love javascript";
// console.log(a.substring(0,4));


//substr()
// let a = "Ilovedurgamma";
// console.log(a.substr(5,12));







































































































































































