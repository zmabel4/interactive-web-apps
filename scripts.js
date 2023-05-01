// This is the firstname of the user

const user = "John";

// This is is the surname of the user


const surname = "Smith";
console.log(user + surname);

// (c) ACM Inc. 2010

// This is the date that a user creared their account

const date = "10/07/2014";

console.log(date);

 
// It is important to show the following massage in order to ;
//-to assure users 
 //-to assure hackers
 //-to impress investores

 console.log("security scan starting");

 // Wait for the DOM to load before accessing elements
document.addEventListener("DOMContentLoaded", function() {

    // nwabisa.js
    let firstname = "Nwabisa";
    let surname = "Gabe";
    let role = "CEO";

    // Create string with the virables 
    let display = '${firstname} ${surname} (${role})';

    // Set Nwabisa into a string 
    document.querySelector("#nwabisa").innerText = display;
});


// Wait for the DOM to load elements
document.addEventListener("DOMContentLoaded", function() {
    // Johannes.js
    let firstname = "Johannes";
    let surname = "Potgieter";
    let role = "Intern";

    // Create a string 
    let display = '${firstname} ${surname} (${role})';

    // Set Johanne a string
    document.querySelector("#johannes").innerText = display;
});

// Wait for the DOM to load before accessing the elements
document.addEventListener("DOMContentLoaded", function () {
    // Alexj.s
    let firstname = "Alex";
    let surname = "Naidoo";
    let role = "Head of Marketing";

    // Create a string
    let display = '${firstname} ${surname} (${role})';

    // Set Alex a string
    document.querySelector("#alex").innerText = display;


});


// Wait for the DOM to load before accessing the elements 
document.addEventListener("DOMContentLoaded", function() {
    // Reference the variables and their role
    console.log('Roles:', nwabisa.role);

})




// Wait for the DOM to load before accessing the elements 
document.addEventListener("DOMContentLoaded", function() {
    // Reference the variables and their role
    console.log('Roles:', johannes.role);

})



// Wait for the DOM to load before accessing the elements 
document.addEventListener("DOMContentLoaded", function() {
    // Reference the variables and their role
    console.log('Roles:', alex.role);

})



