# CAWPILE Book Rating Tool

A simple, interactive web tool for calculating book ratings using the CAWPILE method — a structured, category-based review system popularized by *Book Roast*.

This project allows readers to thoughtfully evaluate books across multiple dimensions and automatically generates both a CAWPILE average score and a corresponding star rating.


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

Each category is rated on a scale from 1–10, and the scores are averaged to produce an overall rating.

This tool uses SusanLynKnits’ expanded explanations of each category as its foundation, as her refinements better reflect how many readers think about and evaluate books in practice.


## Features

- Category-based CAWPILE scoring (Characters, Atmosphere, Writing, Plot, Intrigue, Logic, Enjoyment)
- Ratings in 0.5 and 0.25 increments for nuance
- Automatic calculation of:
  - CAWPILE average (out of 10)
  - Star rating (out of 5, rounded to the nearest 0.25)
- Clean, responsive UI
- Modal popup displaying results
- Fully client-side (no backend required)


## Tech Stack

- **HTML5** — structure and form inputs  
- **CSS3** — layout, styling, and modal design  
- **JavaScript** — calculations, rounding logic, and interactivity  

No frameworks or external libraries are required.


## Rating Logic

1. All seven category values are converted to numbers and summed.
2. The total is divided by 7 to produce the CAWPILE average.
3. The average is converted to a 5-star scale by dividing by 2.
4. The final star rating is rounded to the nearest 0.25, using custom rounding logic.


## How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/Wezy18/CAWPILE-Rating-Tool.git
   ```
2. Open index.html in your browser.

3. Select ratings for each category and click Submit.

That’s it — no build tools or setup required.


## Possible Future Improvements

Save ratings to local storage

Add a breakdown of category scores in the results modal

Allow users to enter book title and author

Export results for Goodreads or StoryGraph

Improve accessibility (ARIA labels, keyboard navigation)


## Credits & Inspiration

CAWPILE System — G from Book Roast

Category Refinements — SusanLynKnits

Design & Development — Rebecca Corder

This project was built as a learning exercise and personal tool for thoughtful book reviews.


## License

This project is for educational and personal use.
Feel free to fork, modify, and expand it.
