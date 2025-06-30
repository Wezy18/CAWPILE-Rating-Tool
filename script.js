// Call Elements
let characters = document.getElementById("characters");
let atmosphere = document.getElementById("atmosphere");
let writing = document.getElementById("writing");
let plot = document.getElementById("plot");
let intrigue = document.getElementById("intrigue");
let logic = document.getElementById("logic");
let enjoyment = document.getElementById("enjoyment");
let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function(e) {
    e.preventDefault();
  
    // Convert and add the values
    let total =
      Number(characters.value) +
      Number(atmosphere.value) +
      Number(writing.value) +
      Number(plot.value) +
      Number(intrigue.value) +
      Number(logic.value) +
      Number(enjoyment.value);
  
    // Calculate raw average (CAWPILE score)
    let rawStar = parseFloat((total / 7).toFixed(3)); // rounded to 3 decimals
  
    // Round to nearest 0.25 only if remainder >= 0.125
    function roundToNearestQuarter(value) {
      const remainder = value % 0.25;
      if (remainder >= 0.125) {
        return Math.round(value * 4) / 4;
      } else {
        return Math.floor(value * 4) / 4;
      }
    }
  
    // Convert to star rating out of 5
    let finalStar = roundToNearestQuarter(rawStar / 2); // divided by 2 for 5-star scale
  
    // Display result
    alert(`CAWPILE Average: ${rawStar}\nStar Rating: ${finalStar} ⭐`);
  });
  


