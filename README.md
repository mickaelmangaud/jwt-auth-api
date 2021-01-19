# jwt-auth-api

## Env Variables

- PORT: Express port connection
- DATABASE_URL: Mongo database connection string
- JWT_SECRET: Jwt secret key

## Todo :

- Créer un logger
- En cas d'erreur de role utilisateur, gérer le cas dans le errorHandler pour retourner une erreur conforme
- Gérer les options des tokens dans generateToken (utils);
- Ajuster les schémas de validation