# Express / TypeScript / TypeORM RESTful API Test UMVEL

API RESTful con autenticación JWT y autorización basada en roles utilizando Express, TypeScript, TypeORM, Postgres.

## Requisitos

- [Node v15+](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Windows]

## Ejecucion en local

- clonar el repositorio
- `npm run dev`

## Migraciones
-  Crear base de datos
- `npm run typeorm:cli -- migration:run`

## Características

- [Express](https://github.com/expressjs/express) framework
- [TypeScript v4](https://github.com/microsoft/TypeScript) 
- [TypeORM](https://typeorm.io/) 
- Autenticación JWT y autorización basada en roles mediante middleware personalizado
- Variables de entorno(.env)
- morgan registro de errores
- Pruebas unitarias y de integración con Mocha y Chai
- Husky y lint-staged  mejoras de commits
  `npm run commit`
- Respuestas de error

## Opcional
_Se añade configuraciones para docker_

- `npm run docker:dev`

