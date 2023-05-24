let enterbutton = document.getElementById("btn");
let output = document.getElementById("outputtext");
let numberofclicks = document.getElementById("numberofclicks");


let num = [Math.floor(Math.random() * 10)]
 let clicks = 0;


btn.addEventListener('click', function(){

 clicks += 1;

 let input = document.getElementById('userinput').value;
 
 

if(clicks >= 5){
    numberofclicks.innerHTML = "Game Over ";
    output.innerHTML = "";
} 

else {
    if(input == num){
        output.innerHTML = "You Guessed Right";
     } 
         
     else if (input < num){
         output.innerHTML = "You Guess to Low!";
     };
     
     if (input > num){
         output.innerHTML = "You Guess to High!";
     }
    
    numberofclicks.innerHTML = "Attempt number " + clicks;
}


     
 
});


//let attempt = prompt("You just five attempt","Type your guessing number");



// for (let i = 1; i < 5; i++) {
//     console.log(i);
//     if(i == 4){
//        // alert("Try Again");
//     }
//  };






