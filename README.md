## Description

Task Backend developed using [Nest](https://github.com/nestjs/nest).

## Configuration

Just edit the Mongodb connection string in enviorment file

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API EndPoints

```bash
# All Froms
GET => /api/v1/forms

# Get Form By Id
GET => /api/v1/form/:id

# Create
POST => /api/v1/form

# Update
PUT => /api/v1/update/:id

```