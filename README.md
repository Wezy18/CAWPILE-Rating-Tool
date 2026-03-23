# CAWPILE Book Rating Tool

The CAWPILE Book Rating Tool is a simple, interactive web application designed to help readers evaluate books in a thoughtful and structured way. Built around the CAWPILE method, this tool guides users through rating key aspects of a book and generates a customized overall score based on their preferred scale and level of precision.

## What is CAWPILE?

CAWPILE is a book rating system created by G from Book Roast.  
The acronym stands for:

- **C** — Characters  
- **A** — Atmosphere  
- **W** — Writing  
- **P** — Plot  
- **I** — Intrigue  
- **L** — Logic  
- **E** — Enjoyment  

Each category is rated on a scale from 1 to 10, and the scores are averaged to produce an overall rating.

This tool draws on SusanLynKnits’ expanded interpretations of each category, offering a more nuanced and reader-focused approach to evaluating books.

## Features

- Structured CAWPILE scoring across all seven categories
- User-configurable rating scale:
  - 10-point scale
  - 5-star scale
- Customizable rating precision:
  - Whole numbers
  - Half steps (0.5)
  - Quarter steps (0.25)
- Automatic calculation of:
  - Final rating based on selected scale and precision
- Clean, responsive interface designed for clarity and ease of use
- Modal-based results display for a focused user experience
- Fully client-side application with no backend required


## Tech Stack

- **HTML5** for structure and semantic layout
- **CSS3** for styling, layout, and responsive design
- **JavaScript** for calculations, rounding logic, and interactivity  

No frameworks or external libraries are used, allowing the project to remain lightweight and focused on fundamental web development principles.

## Rating Logic

1. All seven category values are converted to numbers and summed.
2. The total is divided by 7 to produce the CAWPILE average.
3. If a 5-star scale is selected, the score is converted by dividing by two.
4. The final rating is rounded according to the user’s selected level of precision:
    - Whole numbers
    - Half steps (0.5)
    - Quarter steps (0.25)

## How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/Wezy18/CAWPILE-Rating-Tool.git
   ```
2. Open index.html in your browser.

From there, select ratings for each category, choose your preferred rating scale and precision, and submit the form to view your results.


## Possible Future Improvements

- Save ratings using local storage
- Display a detailed breakdown of category scores in the results modal
- Add fields for book title and author
- Enable exporting results for platforms like Goodreads or StoryGraph
- Improve accessibility through ARIA labels and enhanced keyboard navigation

## Credits & Inspiration

- CAWPILE System — G from Book Roast
- Category Refinements — SusanLynKnits
- Design & Development — Rebecca Corder

This project was created as both a learning experience and a practical tool for more intentional, reflective book reviews.


## License

This project is intended for educational and personal use. You are welcome to fork, modify, and expand upon it.
