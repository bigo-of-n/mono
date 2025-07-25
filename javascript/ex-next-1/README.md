This is a Next.js project for a simple note-taking application.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Data Setup and Migration

This project uses Drizzle ORM with a SQLite database. To set up the database and run migrations, use the following command:

```bash
pnpm db:migrate
```

This will create a `local.db` file in the root of the project and run all the necessary migrations.

## Drizzle Kit Studio

To view the data in the database, you can use the Drizzle Kit studio. Run the following command to start the studio:

```bash
pnpm db:studio
```
