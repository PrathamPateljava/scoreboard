var homeScore=document.getElementById("home-el")
var guestScore=document.getElementById("guest-el")

let oneh=document.getElementById("one-h")
let twoh=document.getElementById("two-h")
let threeh=document.getElementById("three-h")
let oneg=document.getElementById("one-g")
let twog=document.getElementById("two-g")
let threeg=document.getElementById("three-g")
let hscore=0
let gscore=0
function hone(){
    hscore+=1
    homeScore.innerHTML =hscore  
}
function htwo(){
  hscore+=2
  homeScore.innerHTML =hscore  
}
function hthree(){
  hscore+=3
  homeScore.innerHTML =hscore  
}

function gone(){
  gscore+=1
  guestScore.innerHTML =gscore  
}
function gtwo(){
  gscore+=2
  guestScore.innerHTML =gscore  
}
function gthree(){
  gscore+=3
  guestScore.innerHTML =gscore  
}