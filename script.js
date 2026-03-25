// Form elements
const characters = document.getElementById("characters");
const atmosphere = document.getElementById("atmosphere");
const writing = document.getElementById("writing");
const plot = document.getElementById("plot");
const intrigue = document.getElementById("intrigue");
const logic = document.getElementById("logic");
const enjoyment = document.getElementById("enjoyment");
const stars = document.getElementById("results-stars");
const increments = document.getElementById("results-increment");
const myBtn = document.getElementById("myBtn");
const title = document.getElementById("book-title");
const author = document.getElementById("author");

// Modal elements
const modal = document.getElementById("resultModal");
const modalText = document.getElementById("modalText");
const closeModalBtn = document.getElementById("closeModalBtn");

// Rounding functions
function roundToNearestWhole(value) {
  return Math.round(value);
}

function roundToNearestHalf(value) {
  return Math.round(value * 2) / 2;
}

function roundToNearestQuarter(value) {
  return Math.round(value * 4) / 4;
}

// Submit button event
myBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Add all category values
  const total =
    Number(characters.value) +
    Number(atmosphere.value) +
    Number(writing.value) +
    Number(plot.value) +
    Number(intrigue.value) +
    Number(logic.value) +
    Number(enjoyment.value);

  // Calculate average score
  const rawStar = total / 7;
  let finalStar;

  // Determine correct score scale and rounding
  if (stars.value === "10") {
    if (increments.value === "1") {
      finalStar = roundToNearestWhole(rawStar);
    } else if (increments.value === "0.5") {
      finalStar = roundToNearestHalf(rawStar);
    } else {
      finalStar = roundToNearestQuarter(rawStar);
    }
  } else {
    const fiveStarScore = rawStar / 2;

    if (increments.value === "1") {
      finalStar = roundToNearestWhole(fiveStarScore);
    } else if (increments.value === "0.5") {
      finalStar = roundToNearestHalf(fiveStarScore);
    } else {
      finalStar = roundToNearestQuarter(fiveStarScore);
    }
  }

  // Show result in modal
  modalText.innerHTML = `Book: <strong>${title.value}</strong><br>Author: <strong>${author.value}</strong><br>Star Rating: <strong>${finalStar}</strong>`;
  modal.style.display = "flex";
});

// Close modal with button
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close modal when clicking outside modal content
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});