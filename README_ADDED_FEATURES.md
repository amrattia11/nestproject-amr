# Added Features & Structure (NestJS v11)

This update includes:
- Global validation pipe (class-validator/class-transformer) bound in `main.ts`.
- Global exception filter for HttpException/unknown errors.
- Database module with async Mongoose connection via `ConfigModule`.
- User schema + Mongoose hooks to hash password.
- Repository pattern base + UsersRepository.
- Hash utils (bcrypt) + usage in users service & hooks.
- Auth module (JWT), guard, `/auth/login`, `/auth/me`.
- Users module: `/users/signup`, `/users/confirm?token=`.

## Environment
Copy `.env.example` to `.env` and set values.

## Scripts
- `npm run start:dev`

> Email confirmation, password reset, and Google OAuth endpoints are scaffolded and require client credentials and a Mailer provider to complete.