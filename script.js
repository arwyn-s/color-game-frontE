var colors= generateRandomnColors(6);
var squares= document.querySelectorAll(".square");
var randColor= Math.floor(Math.random()*colors.length );
var pickedColor= colors[randColor];
var h1= document.querySelector("h1");
var rgbHeader= document.querySelector("h1 > span");
var messageDisplay= document.getElementById("messageDisplay");
var resetButton = document.getElementById("resetbutton");

rgbHeader.textContent= pickedColor;

resetButton.addEventListener("click",function(){
    
    this.textContent= "NEW GAME";
    colors= generateRandomnColors(6);
    for(var i=0;i< 6;i++){
        squares[i].style.backgroundColor= colors[i];
    }
    pickedColor= colors[Math.floor(Math.random()*colors.length)];
    rgbHeader.textContent= pickedColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor="#232323";

});
for(var i=0;i< 6;i++){
    squares[i].style.backgroundColor = colors[i];
    /*
    Click event to callback an eventHandler for the color grids. 
    */
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor===pickedColor){
            for(let i=0;i< colors.length;i++){
                squares[i].style.backgroundColor=pickedColor;
            }
            messageDisplay.textContent="CORRECT!!";
            h1.style.backgroundColor=pickedColor;
            resetButton.textContent="PLAY AGAIN?";
        } else {
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="TRY AGAIN!";
        }
    });
}

function generateRandomnColors(length){
    let rmix = [];
    let gmix = [];
    let bmix = [];
    for(let i=0;i< 256;i+=64){
        rmix.push(Math.floor(Math.random()*64 +i));
        gmix.push(Math.floor(Math.random()*64 +i));
        bmix.push(Math.floor(Math.random()*64 +i));
    }
    let colors =[];
    let i=0;
    while(i<length) {
        let rrand= Math.floor(Math.random()*rmix.length);
        let grand= Math.floor(Math.random()*gmix.length);
        let brand= Math.floor(Math.random()*bmix.length);
        colors.push("rgb("+ rmix[rrand] + ", "
                          + gmix[grand] + ", "
                          + bmix[brand] + ")" );
        if(i%3===0){
            rmix.splice(rrand,1);
        } else if(i%3===1){
            gmix.splice(grand,1);
        } else {
            bmix.splice(brand,1);
        }
        i+=1;
    }
    return colors;
}
