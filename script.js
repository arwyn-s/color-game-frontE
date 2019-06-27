var color =[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];
var squares = document.querySelectorAll(".square");
var pickedColor = color[3];
var rgbHeader = document.querySelector("h1 > span");
var messageDisplay = document.getElementById("messageDisplay");

rgbHeader.textContent= pickedColor;

for(var i=0;i< 6;i++){
    squares[i].style.backgroundColor = color[i];
    /*
    Click event to callback an eventHandler for the color grids. 
    */
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor===pickedColor){
            for(let i=0;i< 6;i++){
                squares[i].style.backgroundColor=pickedColor;
            }
        } else {
            this.style.backgroundColor="#232323";
        }
    });
}
