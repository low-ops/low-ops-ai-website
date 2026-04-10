# Low-Ops landing

Marketing site (Next.js). Aligned with the Low-Ops platform application specification (Docker on port 8000, `/ready`, no-cache on document routes).

## Requirements (Low-Ops)

- Listens on **port 8000**
- **`GET /ready`** returns **200** when healthy
- **Dockerfile** for production image
- **docker-compose** for local container run

## Local development

```bash
npm install
npm run dev
```

## Local Docker (same as production image)

```bash
docker compose up --build
```

Open [http://localhost:8000](http://localhost:8000). Health: [http://localhost:8000/ready](http://localhost:8000/ready).

## Build

```bash
npm run build
npm start
```

This site is stateless; no database or S3 configuration is required unless you extend it.
