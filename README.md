# Odd Habitats

A small static field guide to unusual animals, grouped by biome. It was built for **Assignment 2** of Web Development 2026 (MDM, University of Coimbra).

## Purpose

Odd Habitats presents some of the strangest animals on Earth without spoiling the surprise. Each animal starts hidden behind a black "?" square. Clicking it plays a short animation themed on the animal's habitat and reveals the photo, a summary and a link to learn more.

## Pages

| Page | Biome | Animals |
| --- | --- | --- |
| `index.html` | Home | Biome selection |
| `aquatic.html` | Aquatic | Leafy seadragon, Blobfish, Sea slug |
| `terrestrial.html` | Terrestrial | Aye-aye, Anteater, Texas horned lizard |
| `high-altitude.html` | High altitude | Himalayan jumping spider, Mountain goat, Wood frog |

Each biome has its own colour palette.

## Features

- **CSS animations**, one per biome, played when an animal is revealed:
  - Aquatic: waves wash over the cover and drain away.
  - High altitude: clouds drift across the cover.
  - Terrestrial: the dry ground shakes, cracks and splits apart.
- **Dynamic interaction**: `reveal.js` reveals one animal at a time when its button is clicked, and keeps the button accessible with `aria-expanded` and screen-reader text.
- **Public API**: `animals.js` fetches each animal's summary and link from the [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/).
- **Responsive layout** using CSS Grid, which collapses to one column on small screens.
- **Accessibility**: keyboard-focusable buttons, visible focus outline, and a reduced-motion media query.
- **No third-party libraries**: plain HTML, CSS and JavaScript.

## Project structure

```
├── index.html
├── aquatic.html
├── terrestrial.html
├── high-altitude.html
├── styles.css      # layout, biome themes and animations
├── reveal.js       # click-to-reveal behaviour
├── animals.js      # Wikipedia API requests
└── images/         # animal photos
```

## Running locally

Open `index.html` in a browser, or serve the folder with any static server, for example `python3 -m http.server`. An internet connection is needed for the Wikipedia summaries.

## Credits

Animal summaries come from Wikipedia. Photos are in `images/`.