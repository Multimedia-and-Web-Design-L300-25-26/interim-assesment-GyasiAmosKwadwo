# Coinbase Clone — Backend API

A RESTful API for a Coinbase-inspired cryptocurrency platform. Built with Node.js, Express, and MongoDB. Handles user authentication and cryptocurrency data.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js (ES Modules) |
| Framework | Express 5 |
| Database | MongoDB via Mongoose |
| Auth | JWT + bcryptjs |
| Config | dotenv |

---

## Project Structure

```
backend/
├── index.js              # Server entry point
├── src/
│   ├── app.js            # Express setup & middleware
│   ├── config/
│   │   └── db.js         # MongoDB connection
│   ├── controllers/      # Route handlers
│   ├── middleware/       # Auth guard & error handler
│   ├── models/           # Mongoose schemas
│   ├── routes/           # Route definitions
│   └── utils/            # Token generation helper
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- A running MongoDB instance (local or Atlas)

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### Running the Server

```bash
# Development (auto-reload)
npm run dev

# Production
npm start
```

The server starts on `http://localhost:<PORT>` (default: `5000`).

---

## API Reference

### Base URL

```
http://localhost:5000
```

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API status |

---

### Authentication

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/register` | No | Register a new user |
| POST | `/login` | No | Log in and receive a JWT cookie |
| POST | `/logout` | No | Clear the auth cookie |

#### Register — `POST /register`

**Request body:**
```json
{
  "name": "Joel Adjei",
  "email": "joel@example.com",
  "password": "secret123"
}
```

**Response:**
```json
{
  "_id": "...",
  "name": "Joel Adjei",
  "email": "joel@example.com",
  "token": "..."
}
```

#### Login — `POST /login`

**Request body:**
```json
{
  "email": "joel@example.com",
  "password": "secret123"
}
```

---

### Cryptocurrencies

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/crypto` | No | List all cryptocurrencies |
| GET | `/crypto/gainers` | No | Top gaining cryptocurrencies |
| GET | `/crypto/new` | No | Newest listings |
| POST | `/crypto` | No | Add a new cryptocurrency entry |

#### Create Crypto — `POST /crypto`

**Request body:**
```json
{
  "name": "Bitcoin",
  "symbol": "BTC",
  "price": 65000,
  "image": "https://example.com/btc.png",
  "change24h": 2.5
}
```

---

### Profile

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/profile` | JWT required | Get the authenticated user's profile |

Pass the JWT as an `httpOnly` cookie (set automatically on login).

---

## Data Models

### User

| Field | Type | Constraints |
|-------|------|-------------|
| name | String | Required |
| email | String | Required, unique, lowercase |
| password | String | Required, min 6 characters (hashed) |

### Crypto

| Field | Type | Constraints |
|-------|------|-------------|
| name | String | Required |
| symbol | String | Required, stored uppercase |
| price | Number | Required, >= 0 |
| image | String | Required |
| change24h | Number | Required |

---

## Authentication Flow

1. User registers or logs in via `/register` or `/login`.
2. Server generates a signed JWT and sets it as an `httpOnly` cookie.
3. Protected routes read the cookie and verify it with `authMiddleware`.
4. User logs out via `/logout` — cookie is cleared server-side.

---

## Error Handling

All errors are processed by a global error handler (`src/middleware/errorHandler.js`). Responses follow this shape:

```json
{
  "message": "Human-readable error description"
}
```
