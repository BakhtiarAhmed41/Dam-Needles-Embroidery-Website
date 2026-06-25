# Dam Needles Embroidery Website

E-commerce website for selling embroidery designs and clothing online, with planned supplier integrations for live stock and ordering.

## Tech stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript
- **Database:** MySQL

## Project structure

```
client/     React frontend
server/     Express API + MySQL
```

## Getting started

### Prerequisites

- Node.js 20+
- MySQL 8+

### Install dependencies

```bash
npm run install:all
```

### Environment setup

Copy the server environment file and update your MySQL credentials:

```bash
cp server/.env.example server/.env
```

Create the database in MySQL:

```sql
CREATE DATABASE dam_needles;
```

### Run development servers

From the project root:

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

Or run them separately:

```bash
npm run dev:client
npm run dev:server
```

## Development approach

The site is being built page by page. The homepage will be implemented first from the provided design, with additional pages and supplier integrations added incrementally.
