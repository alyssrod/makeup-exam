/*
  Do NOT uncomment the lines of code below, they will cause errors.  
  But I am providing it as a template.
  */

/* 
document.querySelector("ELEMENT").addEventListener("EVENT",function(){
     //YOUR CODE
 })
 */



// Problem 1
document.addEventListener('DOMContentLoaded', function(){
  console.log("Frita Batidos"); 
}); 

// Problem 2
document.querySelector('h1').addEventListener('click', function(){ 
  this.style.color = '#6061FF'; 
  this.style.fontSize = '50px';
}); 

// Problem 3
// Part 1


// Problem 3
// Part 2



// Problem 4
document.querySelector('button').addEventListener('click', function() {
    document.querySelector('.container').classList.add('style_all');
});


// Problem 5
const images = document.querySelectorAll('figure img');
if (images.length >= 4) {  
    images[3].setAttribute('alt', 'two espresso cups'); 
}

// Problem 6
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('dblclick', function(){ 
    console.log(this.alt); 
  }); 
}); 
