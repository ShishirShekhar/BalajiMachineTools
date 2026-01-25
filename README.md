# Balaji Machine Tools

Full-stack product catalog for Balaji Machine Tools built with React + Vite on the client and Node.js/Express + SQLite on the server.

## Stack

- Client: React, Vite, Tailwind (see `client/`)
- Server: Express, SQLite (better-sqlite3), helmet/cors/compression/rate limiting
- Data: seeded from `client/src/lib/data/products.json` into SQLite on first boot

## Quick Start

```bash
# install deps
npm install
cd server && npm install
cd ../client && npm install

# start server (http://localhost:5000)
cd ../server && npm start

# start client (http://localhost:5173)
cd ../client && npm run dev
```

## Environment

Create `server/.env` (optional overrides):

```
PORT=5000
ADMIN_TOKEN=super-secret
ALLOWED_ORIGINS=http://localhost:5173
RATE_LIMIT_MAX=300
```

Client uses `VITE_API_URL` to point at the server API (default `http://localhost:5000/api`).

## API (summary)

- `GET /api/health` — health check
- `GET /api/products` — list products; query `category`
- `GET /api/products/search?q=` — search
- `GET /api/products/categories` — distinct categories
- `GET /api/products/:id` — product detail
- Admin (requires `x-admin-token` if `ADMIN_TOKEN` is set):
 	- `POST /api/admin/products`
 	- `PUT /api/admin/products/:id`
 	- `DELETE /api/admin/products/:id`

## Notes

- SQLite file stored at `server/data/app.db`; auto-seeded from client data on first run.
- Admin mutations persist to SQLite; restart-safe.
- Client has a fallback to local JSON if `USE_API` is disabled in `productService`.
