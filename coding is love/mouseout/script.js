const boxElement = document.getElementById("box");

// add a mouseout event listener 
boxElement.addEventListener("mouseout", function () {
  alert("you left the safe zone 🙅 (mouse out event working properly)");
});