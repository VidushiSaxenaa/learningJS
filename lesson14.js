console.log("Akshat")

//let vidushis = document.getElementsByClassName(box)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
// function setRandomColor() {
//     $(".box").css("background-color", getRandomColor());
// }


    
document.querySelectorAll(".box").forEach(v=>{
    v.style.backgroundColor = getRandomColor()
})

  
  