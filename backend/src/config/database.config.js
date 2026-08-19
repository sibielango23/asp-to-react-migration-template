export const databaseConfig = {
  server: process.env.DB_SERVER ?? "localhost",
  database: process.env.DB_NAME ?? "migration_db",
  user: process.env.DB_USER ?? "sa",
  password: process.env.DB_PASSWORD ?? "your-password"
};

