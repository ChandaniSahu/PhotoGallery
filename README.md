# Photo Gallery

A React-based photo gallery application that allows users to search for and view photos. Built with TypeScript, Vite, and Tailwind CSS.

Checkout live demo here: [https://chandani-photo-gallery.netlify.app/](https://chandani-photo-gallery.netlify.app/)

## Features

- Search for photos using keywords
- View photo results in a responsive gallery layout
- Add photos to favorites
- Modern, clean UI with Tailwind CSS

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser


## Project Structure

```
src/
├── components/          # React components
│   ├── Gallery.tsx     # Photo gallery display
│   ├── PhotoCard.tsx   # Individual photo card
│   ├── SearchBar.tsx   # Search input component
│   └── Spinner.tsx     # Loading spinner
├── hooks/              # Custom hooks
│   └── useFetchPhotos.ts # Photo fetching logic
├── types/              # TypeScript type definitions
│   ├── index.ts
│   └── photo.ts
├── reducer/            # State management
│   └── favouritesReducer.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **React Icons** - Icon library

## Usage

1. Enter a search term in the search bar
2. Browse the photo results in the gallery
3. Click on photos to view details or add to favorites

## Contributing

Feel free to submit issues and enhancement requests!

