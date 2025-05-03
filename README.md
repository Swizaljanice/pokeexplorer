### PokeExplorer – Interactive Pokémon Data Explorer
  Explore the first 150 Pokémon interactively using search and type filters, with a beautiful butter-yellow and coral-themed UI.

### Live Demo
 [Deployed link](https://pokeexplorer-three.vercel.app/)

### Screenshots
![Home page](<Screenshot 2025-05-03 190352.png>)
![Filter page](<Screenshot 2025-05-03 190407.png>)
![Search page](<Screenshot 2025-05-03 190617.png>)

### Features

-  **Search by name** (real-time)
-  **Filter by type** (e.g., Fire, Water, Grass)
-  **Responsive design** for mobile and desktop
-  **Card UI** showing:
  - Name
  - Sprite Image
  - Type(s)
  - ID


### Folder Structure

```text
poke-explorer/
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Header.js         
│   │   ├── PokemonCard.js    
│   │   ├── SearchBar.js      
│   │   └── TypeFilter.js    
│   │
│   ├── App.js                
│   ├── App.css               
│   └── index.js              
│
├── package.json              
└── README.md                 
