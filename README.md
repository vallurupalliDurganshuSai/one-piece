# One Piece — Character Arcs Explorer

A premium, interactive web application to explore iconic One Piece story arcs and their legendary characters.

![One Piece Explorer](images/logo.png) **https://one-piece-about.vercel.app/** 

## Features

- **Arc Cards** — Browse through 10 major One Piece story arcs with stunning glass-style cards and cover images
- **Character Details** — Click any character to view their role, bounty, and backstory in an elegant centered popup modal
- **Smooth Animations** — Entrance animations, hover effects, and polished transitions throughout
- **Loading Screen** — Animated loading screen with the One Piece logo
- **Responsive Design** — Fully responsive layout for desktop, tablet, and mobile
- **Premium UI** — Dark navy theme with blue accent glows, Cinzel typography, and a viewport frame

## Arcs Covered

| Arc | Saga |
|-----|------|
| Romance Dawn | East Blue Saga |
| Alabasta | Alabasta Saga |
| Skypiea | Sky Island Saga |
| Enies Lobby | Water 7 Saga |
| Thriller Bark | Thriller Bark Saga |
| Marineford | Summit War Saga |
| Fishman Island | Fish-Man Island Saga |
| Dressrosa | Dressrosa Saga |
| Whole Cake Island | Whole Cake Saga |
| Wano | Wano Country Saga |

## Project Structure

```
one-piece/
├── index.html          # Landing page — arc selection grid
├── arc.html            # Arc detail page — character list & popup modal
├── css/
│   ├── global.css      # Global styles, navbar, footer, layout
│   ├── cards.css       # Arc cards & character cards styling
│   ├── modal.css       # Character popup modal
│   └── loading.css     # Loading screen animation
├── js/
│   ├── app.js          # Arc data & landing page logic
│   ├── arc.js          # Arc detail page & modal logic
│   └── loading.js      # Loading screen controller
├── images/
│   ├── logo.png        # One Piece logo
│   ├── vit-logo.png    # VIT-AP University logo
│   └── img.png         # Placeholder image (replace with actual arc/character images)
└── README.md
```

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, grid, flexbox, animations, backdrop-filter
- **Vanilla JavaScript** — No frameworks, pure DOM manipulation
- **Google Fonts** — Cinzel (serif headings) + Inter (body text)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/revanthm1902/one-piece.git
   ```

2. Open `index.html` in your browser, or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .
   ```

3. Explore the arcs and characters!

## Customizing Images

Each arc and character has a placeholder image (`images/img.png`). To add custom images:

1. Add your images to the `images/` folder
2. Open `js/app.js`
3. Update the `image` property for each arc and character object with the path to your image

**Example:**
```javascript
{
  id: 'romance-dawn',
  image: 'images/romance-dawn.png',   // ← update this
  characters: [
    { name: 'Monkey D. Luffy', ..., image: 'images/luffy.png' },  // ← and these
  ]
}
```

## Made By

**VIT-AP University**

---

© 2026 One Piece Explorer. All rights reserved.
One Piece is created by Eiichiro Oda. This is a fan project for educational purposes.
