# projeto19-drivenpass
DrivenPass API, a password manager built with TypeScript, Node.js, Express, Prisma and Postgres.

<h1 align="center">
  DrivenPass
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

## Description

DrivenPass is the API of a password manager.

</br>

## Features

-   Create account;
-   Access an account;
-   Create credential;
-   Search credentials;
-   Delete credential;
-   Create safe note;
-   Search safe notes;
-   Delete safe note;
-   Create card;
-   Search cards;
-   Delete card;
-   Create a wi-fi log;
-   Search wi-fi logs;
-   Delete a wi-fi log.

</br>

## API Reference

### Create account

```http
POST /sign-up
```

#### Request:

| Body         | Type      | Description                        |
| :----------  | :-------- | :--------------------------------- |
| `email`| `string`       | **Required**. User mail. |
| `password`       | `string`  | **Required**. User password. |    

`Password must be at least 10 characters`

#

### Access an account

```http
POST /sign-in
```

#### Request:

| Body         | Type     | Description                              |
| :------------| :------- | :--------------------------------------- |
| `email`        | `string` | **Required**. User mail                   |
| `password`   | `string` | **Required**. User password              |

`Password must be at least 10 characters`

#### Response:

```json
{
  "token": 11111111111
}
```

#

### Create credential

```http
POST /credentials
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

####

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `title`      | `string`| **Required**. Credential name. |
| `url`         | `string`| **Required**. Valid url.              |
| `username`    | `string`| **Required**. Username.       |
| `password`       | `string` | **Required**. Password.        |

`Cannot create two different credentials with the same title`

#### Response:

```json
{
  "id": 1,
  "title": "Credential name",
  "url": "url",
  "username": "username",
  "password": "password",
  "userId": 1
}
```

#

### Search credentials

```http
GET /credentials
```

`To search all user credentials`

#### OR 

```http
GET /credentials?credentialId={id}
```

`To search a specific credential`

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

#### Response:

#### If search all user credentials: 

```json
[
  {
    "id": 1,
    "title": "Credential name",
    "url": "url",
    "username": "username",
    "password": "password",
    "userId": 1
  },
  {
    ...
  }
]
```

#### OR

#### If search a specific credential: 

```json
{
    "id": 1,
    "title": "Credential name",
    "url": "url",
    "username": "username",
    "password": "password",
    "userId": 1
}
```

#

### Delete credential

```http
DELETE /credentials/${credentialId}
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

#

### Create safe note

```http
POST /notes
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

####

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `title`      | `string`| **Required**. Note name. |
| `note`         | `string`| **Required**. Note.              |

`Title cannot be longer than 50 characters`

`The annotation no longer than 1000 characters`

`Cannot create two different annotations with the same title`

#### Response:

```json
{
  "id": 1,
  "title": "Annotation name",
  "note": "My annotation",
  "userId": 1
}
```

#

### Search credentials

```http
GET /notes
```

`To search all user notes`

#### OR 

```http
GET /notes?noteId={id}
```

`To search a specific note`

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

#### Response:

#### If search all user notes: 

```json
[
  {
    "id": 1,
    "title": "Annotation name",
    "note": "My annotation",
    "userId": 1
  },
  {
    ...
  }
]
```

#### OR

#### If search a specific note: 

```json
{
    "id": 1,
    "title": "Annotation name",
    "note": "My annotation",
    "userId": 1
}
```

#

### Delete note

```http
DELETE /notes/${noteId}
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

#

### Create card

```http
POST /cards
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

####

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `title`      | `string`| **Required**. Name given to the card. |
| `cardNumber`      | `string`| **Required**. Card number. |
| `cardholderName`      | `string`| **Required**. Card name. |
| `securityCode`      | `string`| **Required**. Card security code. |
| `expirationDate`      | `string`| **Required**. Card expiration date. |
| `password`      | `string`| **Required**. Card password. |
| `isVirtual`      | `boolean`| **Required**. Whether the card is virtual or not. |
| `type`         | `string`| **Required**. Card type.              |

`The card can only be of the following types: credit, debit, credit_debit`

`Cannot create two different cards with the same title`

#### Response:

```json
{
  "id": 1,
  "title": "Name given to the card",
  "cardNumber": "1111111111111111",
  "cardholderName": "MY NAME",
  "securityCode": "111",
  "expirationDate": "DD/MM",
  "password": "My password",
  "isVirtual": false,
  "type": "credit",
  "userId": 1
}
```

#

### Search cards

```http
GET /cards
```

`To search all user cards`

#### OR 

```http
GET /cards?cardId={id}
```

`To search a specific card`

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

#### Response:

#### If search all user cards: 

```json
[
  {
    "id": 1,
    "title": "Name given to the card",
    "cardNumber": "1111111111111111",
    "cardholderName": "MY NAME",
    "securityCode": "111",
    "expirationDate": "DD/MM",
    "password": "My password",
    "isVirtual": false,
    "type": "credit",
    "userId": 1
  },
  {
    ...
  }
]
```

#### OR

#### If search a specific card: 

```json
{
  "id": 1,
  "title": "Name given to the card",
  "cardNumber": "1111111111111111",
  "cardholderName": "MY NAME",
  "securityCode": "111",
  "expirationDate": "DD/MM",
  "password": "My password",
  "isVirtual": false,
  "type": "credit",
  "userId": 1
}
```

#

### Delete card

```http
DELETE /cards/${cardId}
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

#

### Create a wi-fi log

```http
POST /wi-fi
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

####

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `title`      | `string`| **Required**. Name given to the wi-fi network record. |
| `networkName`      | `string`| **Required**. Network name. |
| `password`      | `string`| **Required**. Wi-fi password. |

#### Response:

```json
{
  "id": 1,
  "title": "Name given to the wi-fi network record",
  "networkName": "Network name",
  "password": "My password",
  "userId": 1
}
```

#

### Search wi-fi logs

```http
GET /wi-fi
```

`To search all user wi-fi`

#### OR 

```http
GET /wi-fi?wifiId={id}
```

`To search a specific wi-fi`

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

#### Response:

#### If search all user wi-fi: 

```json
[
  {
    "id": 1,
    "title": "Name given to the wi-fi network record",
    "networkName": "Network name",
    "password": "My password",
    "userId": 1
  },
  {
    ...
  }
]
```

#### OR

#### If search a specific wi-fi: 

```json
{
  "id": 1,
  "title": "Name given to the wi-fi network record",
  "networkName": "Network name",
  "password": "My password",
  "userId": 1
}
```

#

### Delete a wi-fi log

```http
DELETE /wi-fi/${wifiId}
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT = number` `Recommended:5000`

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`JWT_SECRET = any string`  

`CRYPTR_SECRET = any string`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/lugablima/projeto19-drivenpass
```

Go to the project directory

```bash
  cd projeto19-drivenpass/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

`The API deploy link is: https://back-projeto19-drivenpass.herokuapp.com/`
