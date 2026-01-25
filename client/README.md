# Client (React + Vite)

SPA for browsing Balaji Machine Tools products.

## Scripts

- npm run dev — start dev server on 5173
- npm run build — production build
- npm run lint — lint

## API config

- VITE_API_URL (default <http://localhost:5000/api>)
- In src/lib/services/productService.js, set USE_API = true to fetch from the server; otherwise it serves local JSON data.

## Project structure (key)

- src/pages — route pages
- src/components — UI and layout components
- src/lib/data — product seed data (also used to seed the server DB)
- src/lib/services/productService.js — API/local data access

## Development flow

1) Start server: cd ../server && npm start
2) Start client: npm run dev
3) Update env: .env with VITE_API_URL if the server runs on a different host/port.
